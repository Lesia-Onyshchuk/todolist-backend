import { Router } from 'express';
import { ctrlController } from '../utils/ctrlController.js';
import {
  addTaskController,
  deleteTaskController,
  getAllTasksController,
  updateTaskController,
} from '../controllers/tasks.js';

const router = Router({ mergeParams: true });

router.get('/', ctrlController(getAllTasksController));

router.post('/', ctrlController(addTaskController));

router.patch('/:taskId', ctrlController(updateTaskController));

router.delete('/:taskId', ctrlController(deleteTaskController));

export default router;
