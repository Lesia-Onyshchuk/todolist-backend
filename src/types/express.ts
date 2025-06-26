import { ParamsDictionary } from 'express-serve-static-core';

export interface BoardParams extends ParamsDictionary {
  boardId: string;
}

export interface BoardTaskParams extends ParamsDictionary {
  boardId: string;
  taskId: string;
}
