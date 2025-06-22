import { getAllTodolist } from '../services/getAllTodolist.js';

export const getAllTodolistController = async (req, res) => {
  const todolist = await getAllTodolist();
  res.status(200).json({
    status: 200,
    message: 'Successfully found todolist!',
    data: todolist,
  });
};
