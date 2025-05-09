import Joi from 'joi';

export default Joi.object({
  enrollmentId: Joi.string().required(),
  method: Joi.string().required(),
  amount: Joi.number().positive().required(),
});
