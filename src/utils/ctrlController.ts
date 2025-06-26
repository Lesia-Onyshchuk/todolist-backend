import { Request, Response, NextFunction, RequestHandler } from 'express';

export type Controller<P = {}, ResBody = any, ReqBody = any, ReqQuery = any> = (
  req: Request<P, ResBody, ReqBody, ReqQuery>,
  res: Response<ResBody>,
  next: NextFunction,
) => Promise<any> | void;

export const ctrlController = <
  P = {},
  ResBody = any,
  ReqBody = any,
  ReqQuery = any,
>(
  controller: Controller<P, ResBody, ReqBody, ReqQuery>,
): RequestHandler => {
  return async (req, res, next) => {
    try {
      await controller(
        req as Request<P, ResBody, ReqBody, ReqQuery>,
        res,
        next,
      );
    } catch (error) {
      next(error);
    }
  };
};
