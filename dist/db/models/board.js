import { model, Schema } from 'mongoose';
import { generateRandom } from '../../utils/generateRandom.js';
const boardSchema = new Schema(
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
export const BoardCollection = model('boards', boardSchema);
