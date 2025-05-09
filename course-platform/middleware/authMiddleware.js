import jwt from 'jsonwebtoken';
import Student from '../models/studentModel.js';


export const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Токен не найден' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await Student.findById(decoded.userId);

    if (!req.user) return res.status(401).json({ error: 'Пользователь не найден' });

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Неверный токен' });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Доступ запрещён — нужны права администратора' });
  }
  next();
};