import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  throw createHttpError(404, 'Route not found');
};
