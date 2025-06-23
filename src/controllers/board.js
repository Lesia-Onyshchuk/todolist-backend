import createHttpError from 'http-errors';
import {
  addBoard,
  deleteBoard,
  getBoardByBoardId,
  getBoardById,
} from '../services/board.js';
// import { BoardCollection } from '../db/models/board.js';
import mongoose from 'mongoose';

export const getBoardByIdController = async (req, res) => {
  const { id } = req.params;

  let board = null;

  if (mongoose.Types.ObjectId.isValid(id)) {
    board = await getBoardById(id);
  }

  if (!board && !isNaN(id)) {
    board = await getBoardByBoardId(Number(id));
  }

  if (!board) {
    return res.status(404).json({ message: 'Board not found' });
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found board with id ${id}!`,
    data: board,
  });
};

export const addBoardController = async (req, res) => {
  const board = await addBoard(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a new board!',
    data: board,
  });
};

export const deleteBoardController = async (req, res) => {
  const { boardId } = req.params;

  const board = await deleteBoard(boardId);

  if (!board) {
    throw createHttpError(404, 'Board not found');
  }

  res.status(204).send();
};
