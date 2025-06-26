import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import createHttpError from 'http-errors';

export const validateBody =
  (schema: ObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (err: any) {
      const error = createHttpError(400, 'Bad request', {
        errors: err.details,
      });
      next(error);
    }
  };
