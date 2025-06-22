import { model, Schema } from 'mongoose';

const todolistSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const TodolistCollection = model('todolist', todolistSchema);
