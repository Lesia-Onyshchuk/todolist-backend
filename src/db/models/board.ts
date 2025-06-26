import { model, Schema, Document } from 'mongoose';
import { generateRandom } from '../../utils/generateRandom.js';

export interface BoardDocument extends Document {
  boardId: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const boardSchema = new Schema<BoardDocument>(
  {
    boardId: {
      type: Number,
      default: () => generateRandom(),
      unique: true,
      required: true,
      min: 100,
      max: 999,
    },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const BoardCollection = model<BoardDocument>('boards', boardSchema);
