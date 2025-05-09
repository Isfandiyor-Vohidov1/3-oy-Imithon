import Joi from 'joi';

export default Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().positive().required(),
  category: Joi.string().required(),
  author: Joi.string().required(),
});
