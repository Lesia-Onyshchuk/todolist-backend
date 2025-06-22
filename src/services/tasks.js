import { TasksCollection } from '../db/models/tasks.js';

export const getAllTasks = async (boardId) => {
  const tasks = await TasksCollection.find({ boardId });
  return tasks;
};

export const addTask = async (payload) => {
  const task = await TasksCollection.create(payload);
  return task;
};

export const updateTask = async (taskId, payload, boardId, options = {}) => {
  const task = await TasksCollection.findOneAndUpdate(
    { _id: taskId, boardId },
    payload,
    {
      new: true,
    },
  );
  return task;
};

export const deleteTask = async (taskId, boardId) => {
  const task = await TasksCollection.findOneAndDelete({ _id: taskId, boardId });
  return task;
};
