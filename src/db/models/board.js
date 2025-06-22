import { model, Schema } from 'mongoose';

const random = () => Math.floor(Math.random() * (999 - 100 + 1)) + 100;

const boardSchema = new Schema(
  {
    boardId: {
      type: Number,
      default: () => random(),
      unique: true,
      required: true,
    },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const BoardCollection = model('boards', boardSchema);
