import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  author: String,
});

export default mongoose.model('Course', courseSchema);
