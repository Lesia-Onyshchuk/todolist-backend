import { Router } from 'express';
import tasksRouter from './tasks.js';
import boardRouter from './board.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createBoardSchema } from '../validation/board.js';
import { ctrlController } from '../utils/ctrlController.js';
import { addBoardController } from '../controllers/board.js';

const router = Router();

router.post(
  '/',
  validateBody(createBoardSchema),
  ctrlController(addBoardController),
);
router.use('/boards/:boardId', tasksRouter);
router.use('/boards', boardRouter);

export default router;
