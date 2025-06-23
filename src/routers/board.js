import { Router } from 'express';
import { ctrlController } from '../utils/ctrlController.js';
import {
  addBoardController,
  deleteBoardController,
  getBoardByIdController,
} from '../controllers/board.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createBoardSchema } from '../validation/board.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get(
  '/:id',
  isValidId('boardId'),
  ctrlController(getBoardByIdController),
);

// router.post(
//   '/',
//   validateBody(createBoardSchema),
//   ctrlController(addBoardController),
// );

router.delete(
  '/:boardId',
  isValidId('boardId'),
  ctrlController(deleteBoardController),
);

export default router;
