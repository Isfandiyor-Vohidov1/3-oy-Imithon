import express from 'express';
import paymentController from '../controllers/paymentController.js';
import { validate } from '../middleware/validate.js';
import paymentSchema from '../schemas/paymentSchema.js';

const router = express.Router();

router.route('/')
  .get(paymentController.getPayments)
  .post(validate(paymentSchema), paymentController.createPayment);

router.route('/:id')
  .get(paymentController.getPaymentById)
  .put(validate(paymentSchema), paymentController.updatePayment)
  .delete(paymentController.deletePayment);

export default router;
