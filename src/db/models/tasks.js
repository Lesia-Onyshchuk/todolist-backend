import { model, Schema } from 'mongoose';

const tasksSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: 'boards',
    },
    status: {
      type: String,
      enum: ['todo', 'inprogress', 'done'],
      default: 'todo',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const TasksCollection = model('tasks', tasksSchema);
