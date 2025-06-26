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
import { BoardParams, BoardTaskParams } from '../types/express.js';

const router = Router({ mergeParams: true });

router.get('/', ctrlController<BoardParams>(getAllTasksController));

router.post(
  '/',
  validateBody(createTaskSchema),
  ctrlController<BoardParams>(addTaskController),
);

router.patch(
  '/:taskId',
  isValidId('taskId'),
  validateBody(updateTaskSchema),
  ctrlController<BoardTaskParams>(updateTaskController),
);

router.delete(
  '/:taskId',
  isValidId('taskId'),
  ctrlController<BoardTaskParams>(deleteTaskController),
);
export default router;
