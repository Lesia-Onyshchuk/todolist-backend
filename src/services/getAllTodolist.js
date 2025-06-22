import { TodolistCollection } from '../db/models/todolist.js';

export const getAllTodolist = async () => {
  const todolist = await TodolistCollection.find();
  return todolist;
};
