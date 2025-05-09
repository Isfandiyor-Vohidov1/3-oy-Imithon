import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connect to MongoDB');
  } catch (err) {
    console.error('Error connect to MongoDB:', err.message);
    process.exit(1);
  }
};
