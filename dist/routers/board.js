import { Router } from 'express';
import { ctrlController } from '../utils/ctrlController.js';
import { isValidId } from '../middlewares/isValidId.js';
import {
  deleteBoardController,
  getBoardByIdController,
} from '../controllers/board.js';
const router = Router();
router.get(
  '/:boardId',
  isValidId('boardId'),
  ctrlController(getBoardByIdController),
);
router.delete(
  '/:boardId',
  isValidId('boardId'),
  ctrlController(deleteBoardController),
);
export default router;
