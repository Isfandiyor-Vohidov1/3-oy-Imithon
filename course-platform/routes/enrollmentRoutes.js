import express from 'express';
import enrollmentController from '../controllers/enrollmentController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validate.js';
import enrollmentSchema from '../schemas/enrollmentSchema.js';

const router = express.Router();

router.post('/enroll', authenticateUser, validate(enrollmentSchema), enrollmentController.enrollCourse);

export default router;
