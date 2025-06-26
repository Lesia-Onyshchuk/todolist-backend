import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';

import { addBoard, deleteBoard, getBoardByBoardId } from '../services/board.js';

interface BoardParams {
  boardId?: string;
}

interface CreateBoardBody {
  boardId?: number;
  name: string;
}

export const getBoardByIdController = async (
  req: Request<BoardParams>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { boardId } = req.params;
    const numericBoardId = Number(boardId);

    if (isNaN(numericBoardId)) {
      res.status(400).json({ message: 'Invalid boardId, must be a number' });
      return;
    }

    const board = await getBoardByBoardId(numericBoardId);

    if (!board) {
      res.status(404).json({ message: 'Board not found' });
      return;
    }

    res.status(200).json({
      status: 200,
      message: `Successfully found board with id ${boardId}!`,
      data: board,
    });
  } catch (error) {
    next(error);
  }
};

export const addBoardController = async (
  req: Request<{}, {}, CreateBoardBody>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const board = await addBoard(req.body);

    res.status(201).json({
      status: 201,
      message: 'Successfully created a new board!',
      data: board,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBoardController = async (
  req: Request<BoardParams>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { boardId } = req.params;

    const board = await deleteBoard(Number(boardId));

    if (!board) {
      throw createHttpError(404, 'Board not found');
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
