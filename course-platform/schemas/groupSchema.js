import Joi from 'joi';

export default Joi.object({
  name: Joi.string().required(),
  type: Joi.string().optional(),
});
