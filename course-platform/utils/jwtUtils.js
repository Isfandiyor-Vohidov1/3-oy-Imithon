import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (userId) =>
  jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });

export const verifyToken = (token) =>
  jwt.verify(token, JWT_SECRET);
