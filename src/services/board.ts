import mongoose from 'mongoose';
import { BoardCollection, BoardDocument } from '../db/models/board.js';
import { TasksCollection } from '../db/models/tasks.js';

const { ObjectId } = mongoose.Types;

export const getBoardByBoardId = async (
  boardId: number,
): Promise<BoardDocument | null> => {
  return await BoardCollection.findOne({ boardId });
};

export const addBoard = async (
  payload: Partial<BoardDocument>,
): Promise<BoardDocument> => {
  const board = await BoardCollection.create(payload);
  return board;
};

export const deleteBoard = async (
  boardId: number,
): Promise<BoardDocument | null> => {
  const board = await BoardCollection.findOneAndDelete({ boardId });

  await TasksCollection.deleteMany({ boardId });

  return board;
};
