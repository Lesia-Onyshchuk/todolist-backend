import { Router } from 'express';
import { ctrlController } from '../utils/ctrlController.js';
import {
  addBoardController,
  deleteBoardController,
  getBoardByIdController,
} from '../controllers/board.js';

const router = Router();

router.get('/:boardId', ctrlController(getBoardByIdController));

router.post('/', ctrlController(addBoardController));

router.delete('/:boardId', ctrlController(deleteBoardController));

export default router;
