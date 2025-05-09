import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

import { connectDB } from './course-platform/config/db.js';
import studentRouter from './course-platform/routes/studentRoutes.js';
import courseRouter from './course-platform/routes/courseRoutes.js';
import enrollmentRouter from './course-platform/routes/enrollmentRoutes.js';
import adminRouter from './course-platform/routes/adminRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use(morgan('dev'));

const accessLogStream = fs.createWriteStream(path.join(process.cwd(), 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

app.use('/api/students', studentRouter);
app.use('/api/courses', courseRouter);
app.use('/api', enrollmentRouter);
app.use('/api/admin', adminRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});