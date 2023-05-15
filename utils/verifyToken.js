// utils/verifyToken.js

const jwt = require('jwt-simple');
const dotenv = require('dotenv');

dotenv.config();

// Verify and decode the QR token to retreive the user ID
const verifyToken = (qrToken) => {
    const secret = process.env.JWT_SECRET // Get secret key from environment variables

    try {
        const decoded = jwt.decode(qrToken, secret)
        const userId = decoded.userId

        return userId
    } catch (error) {
        return null
    }
}

module.exports = verifyToken