import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
  name: String,
  type: String,
});

export default mongoose.model('Group', groupSchema);
