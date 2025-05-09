import express from 'express';
import groupController from '../controllers/groupController.js';
import { validate } from '../middleware/validate.js';
import groupSchema from '../schemas/groupSchema.js';

const router = express.Router();

router.route('/')
  .get(groupController.getGroups)
  .post(validate(groupSchema), groupController.createGroup);

router.route('/:id')
  .get(groupController.getGroupById)
  .put(validate(groupSchema), groupController.updateGroup)
  .delete(groupController.deleteGroup);

export default router;
