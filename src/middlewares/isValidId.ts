import createHttpError from 'http-errors';
import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

export const isValidId =
  (param = 'id') =>
  (req: Request, res: Response, next: NextFunction): void => {
    const id = req.params[param];

    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
    const isNumericId = !isNaN(Number(id));

    if (!isValidObjectId && !isNumericId) {
      throw createHttpError(400, `Invalid ${param}`);
    }

    next();
  };
