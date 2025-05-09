import express from 'express';
import courseController from '../controllers/courseController.js';
import { validate } from '../middleware/validate.js';
import courseSchema from '../schemas/courseSchema.js';

const router = express.Router();

router.route('/')
  .get(courseController.getCourses)
  .post(validate(courseSchema), courseController.createCourse);

router.route('/:id')
  .get(courseController.getCourseById)
  .put(validate(courseSchema), courseController.updateCourse)
  .delete(courseController.deleteCourse);

export default router;
