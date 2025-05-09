import Joi from 'joi';

export default Joi.object({
  studentId: Joi.string().required(),
  courseId: Joi.string().required(),
  startDate: Joi.date().optional(),
});
