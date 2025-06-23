import mongoose from 'mongoose';
import { BoardCollection } from '../db/models/board.js';
import { TasksCollection } from '../db/models/tasks.js';

const { ObjectId } = mongoose.Types;

export const getBoardById = async (mongoId) => {
  return BoardCollection.findById(mongoId);
};

export const getBoardByBoardId = async (boardId) => {
  return BoardCollection.findOne({ boardId });
};

export const addBoard = async (payload) => {
  const board = await BoardCollection.create(payload);
  return board;
};

export const deleteBoard = async (boardId) => {
  const board = await BoardCollection.findOneAndDelete({ _id: boardId });

  await TasksCollection.deleteMany({ boardId: new ObjectId(boardId) });
  return board;
};
