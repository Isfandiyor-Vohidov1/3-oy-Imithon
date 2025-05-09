import express from 'express';
import studentController from '../controllers/studentController.js';
import { validate } from '../middleware/validate.js';
import studentSchema from '../schemas/studentSchema.js';

const router = express.Router();

router.route('/')
  .get(studentController.getStudents)
  .post(validate(studentSchema), studentController.createStudent);

router.route('/:id')
  .get(studentController.getStudentById)
  .put(validate(studentSchema), studentController.updateStudent)
  .delete(studentController.deleteStudent);

router.post('/auth/login', validate(studentSchema), studentController.login);

export default router;