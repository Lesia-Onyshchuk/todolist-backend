import createHttpError from 'http-errors';
import { addBoard, deleteBoard, getBoardById } from '../services/board.js';

export const getBoardByIdController = async (req, res) => {
  const { boardId } = req.params;

  const board = await getBoardById(boardId);

  if (!board) {
    return res.status(404).json({ message: 'Board not found!' });
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found board with id ${boardId}!`,
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
