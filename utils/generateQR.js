// utils/generateQR.js

const qr = require('qrcode')
const jwt = require('jwt-simple');
const dotenv = require('dotenv');

dotenv.config();

// Generate a QR code with userID as a payload
const generateQR = (userId) => {
    const payload = { userId }
    const secret = process.env.JWT_SECRET // Get secret key from environment variables

    const token = jwt.encode(payload, secret)
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${token}`

    return qrCodeUrl
}

module.exports = generateQR