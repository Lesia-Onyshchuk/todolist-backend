import { TasksCollection, TaskDocument } from '../db/models/tasks.js';
import { FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';

export const getAllTasks = async (boardId: number): Promise<TaskDocument[]> => {
  const tasks = await TasksCollection.find({ boardId });
  return tasks;
};

export const addTask = async (
  payload: Partial<TaskDocument>,
): Promise<TaskDocument> => {
  const task = await TasksCollection.create(payload);
  return task;
};

export const updateTask = async (
  taskId: string,
  payload: UpdateQuery<TaskDocument>,
  boardId: number,
  options: QueryOptions = { new: true },
): Promise<TaskDocument | null> => {
  const task = await TasksCollection.findOneAndUpdate(
    { _id: taskId, boardId } as FilterQuery<TaskDocument>,
    payload,
    options,
  );
  return task;
};

export const deleteTask = async (
  taskId: string,
  boardId: number,
): Promise<TaskDocument | null> => {
  const task = await TasksCollection.findOneAndDelete({ _id: taskId, boardId });
  return task;
};
