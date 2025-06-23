import { model, Schema } from 'mongoose';
import { taskStatus } from '../../constants/tasks.js';

const tasksSchema = new Schema(
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

export const TasksCollection = model('tasks', tasksSchema);
