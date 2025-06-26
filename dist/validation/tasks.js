import Joi from 'joi';
import { isValidObjectId } from 'mongoose';
import { taskStatus } from '../constants/tasks.js';
export const createTaskSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(3).max(300).required(),
  status: Joi.string().valid(...taskStatus),
  boardId: Joi.string()
    .custom((value, helper) => {
      if (value && !isValidObjectId(value)) {
        return helper.error('any.invalid');
      }
      return value;
    })
    .messages({
      'any.invalid': 'Board id should be a valid mongo id',
    }),
});
export const updateTaskSchema = Joi.object({
  title: Joi.string().min(3).max(30),
  description: Joi.string().min(3).max(300),
  status: Joi.string().valid(...taskStatus),
});
