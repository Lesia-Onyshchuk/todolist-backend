import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';

export const initMongoConnection = async (): Promise<void> => {
  try {
    const user: string = getEnvVar('MONGODB_USER');
    const pwd: string = getEnvVar('MONGODB_PASSWORD');
    const url: string = getEnvVar('MONGODB_URL');
    const db: string = getEnvVar('MONGODB_DB');

    const connectionString = `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`;

    await mongoose.connect(connectionString);

    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Mongo connection error:', error);
    throw error;
  }
};
