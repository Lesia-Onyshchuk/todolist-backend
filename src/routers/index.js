import { Router } from 'express';
import tasksRouter from './tasks.js';
import boardRouter from './board.js';

const router = Router();

router.use('/boards/:boardId/tasks', tasksRouter);
router.use('/boards', boardRouter);

export default router;
