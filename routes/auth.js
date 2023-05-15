// routes/auth.js

const express = require('express')
const router = express.Router()
const User = require('../models/User')
const generateQR = require('../utils/generateQR')
const verifyToken = require('../utils/verifyToken')
const jwt = require('jwt-simple')
const dotenv = require('dotenv')

dotenv.config()

// Generate and send QR code to the user
router.post('/login', async (req, res) => {
    const { email } = req.body

    try {
        // Find or create user based on their email
        let user = await User.findOne({ email })

        if (!user) {
            user = await User.create({ email })
        }

        // Generate a unique QR token for the user
        const qrToken = await generateQR(user._id)

        // Save the QR token to the user
        user.qrToken = qrToken
        await user.save()

        // Send the QR code URL to the user
        res.json({ qrToken })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' })
    }
})

// Verify the QR code and log the user in
router.post('/verify', async (req, res) => {
    const { qrToken } = req.body

    try {
        // Verify the token and get the user ID
        const userId = await verifyToken(qrToken)

        if (!userId) {
            return res.status(400).json({ error: 'Invalid QR code' })
        }

        // Find the user based on the ID
        const user = await User.findById(userId)

        if (!user) {
            return res.status(400).json({ error: 'User not found' })
        }

        // Clear the QR token
        user.qrToken = undefined;
        await user.save()

        // Return success message
        res.json({ message: 'Logged in successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server Error' });
    }
})

module.exports = router