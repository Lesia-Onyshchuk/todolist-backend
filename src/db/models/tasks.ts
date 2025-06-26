import { model, Schema, Document } from 'mongoose';
import { taskStatus, TaskStatus } from '../../constants/tasks.js';

export interface TaskDocument extends Document {
  title: string;
  description: string;
  status: TaskStatus;
  boardId: number;
  createdAt: Date;
  updatedAt: Date;
}

const tasksSchema = new Schema<TaskDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: taskStatus,
      default: taskStatus[0],
      required: true,
    },
    boardId: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const TasksCollection = model<TaskDocument>('tasks', tasksSchema);
