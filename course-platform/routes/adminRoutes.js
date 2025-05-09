import express from 'express';
import adminController from '../controllers/adminController.js';
import { authenticateUser, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/stats', authenticateUser, isAdmin, adminController.getStats);

export default router;