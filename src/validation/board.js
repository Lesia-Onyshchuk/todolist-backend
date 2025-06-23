import Joi from 'joi';

export const createBoardSchema = Joi.object({
  boardId: Joi.number().integer().min(0),
  name: Joi.string().min(3).max(30).required(),
});
