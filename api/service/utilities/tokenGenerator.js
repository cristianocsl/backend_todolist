const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = { expiresIn: '14d', algorithm: 'HS256' };

const tokenGenerator = (payload) => jwt.sign(payload, JWT_SECRET, jwtConfig);

module.exports = { tokenGenerator };