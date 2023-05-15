# QR Code based Authentication System

A QR code authentication system built with Node.js, Express, and MongoDB. It allows users to generate a QR code for login and verifies the QR token to authenticate and log in the user.

## Features

- User registration and login
- QR code generation for login
- QR token verification for authentication
- MongoDB for data storage

## Installation

1. Clone the repository:
```bash
$ git clone https://github.com/Dev-29/elytra.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

- Create a `.env` file the root directory of the project.the root directory of the project.
- Add the following environment variables to the `.env` file:
- `PORT=3000`
- `MONGODB_URI=mongodb://localhost:27017/qr_auth`
- `JWT_SECRET=your-secret-key`

## Usage
1. Start the mongod service:
```bash
mongod
```

2. Start the server:
```bash
npm start
```

3. Open postman tool
4. Generate QR code:
Send a POST request to '`localhost:3000/auth/login`':

```bash
{
	"email": "example@gmail.com
}
```

The response will contain a `qrCodeUrl` field with the URL of the generated QR code.

5. Verify the QR code:

```bash
{
	"qrToken": "<QR-TOKEN>"
}
```
Replace `<QR_TOKEN>` with the value of the QR token displayed in the generated QR code.

- If the QR token is valid, you will receive a response with a success message indicating that the user is logged in.
