import { Router } from 'express';
import { ctrlController } from '../utils/ctrlController.js';
import { getAllTodolistController } from '../controllers/getAllTodolistController.js';

const router = Router();

router.get('/', ctrlController(getAllTodolistController));

export default router;
