import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';
import {
  addTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from '../services/tasks.js';
import { BoardParams, BoardTaskParams } from '../types/express.js';

export const getAllTasksController = async (
  req: Request<BoardParams>,
  res: Response,
): Promise<void> => {
  const { boardId } = req.params;

  const tasks = await getAllTasks(Number(boardId));

  res.status(200).json({
    status: 200,
    message: 'Successfully found all tasks!',
    data: tasks,
  });
};

export const addTaskController = async (
  req: Request<BoardParams, {}, any>,
  res: Response,
): Promise<void> => {
  const { boardId } = req.params;
  const numericBoardId = Number(boardId);

  const task = await addTask({ ...req.body, boardId: numericBoardId });

  res.status(201).json({
    status: 201,
    message: 'Successfully created a new task!',
    data: task,
  });
};

export const updateTaskController = async (
  req: Request<BoardTaskParams, {}, any>,
  res: Response,
): Promise<void> => {
  const { taskId, boardId } = req.params;
  const numericBoardId = Number(boardId);

  const updatedTask = await updateTask(taskId!, req.body, numericBoardId);

  if (!updatedTask) {
    throw createHttpError(404, 'Task not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully updated task by id ${taskId}!`,
    data: updatedTask,
  });
};

export const deleteTaskController = async (
  req: Request<BoardTaskParams>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { taskId, boardId } = req.params;
    const numericBoardId = Number(boardId);

    const task = await deleteTask(taskId!, numericBoardId);

    if (!task) {
      throw createHttpError(404, 'Task not found');
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
