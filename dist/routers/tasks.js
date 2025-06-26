import { Router } from 'express';
import { ctrlController } from '../utils/ctrlController.js';
import {
  addTaskController,
  deleteTaskController,
  getAllTasksController,
  updateTaskController,
} from '../controllers/tasks.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createTaskSchema, updateTaskSchema } from '../validation/tasks.js';
import { isValidId } from '../middlewares/isValidId.js';
const router = Router({ mergeParams: true });
router.get('/', ctrlController(getAllTasksController));
router.post(
  '/',
  validateBody(createTaskSchema),
  ctrlController(addTaskController),
);
router.patch(
  '/:taskId',
  isValidId('taskId'),
  validateBody(updateTaskSchema),
  ctrlController(updateTaskController),
);
router.delete(
  '/:taskId',
  isValidId('taskId'),
  ctrlController(deleteTaskController),
);
export default router;
