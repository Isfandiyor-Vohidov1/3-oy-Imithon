import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  enrollmentId: mongoose.Schema.Types.ObjectId,
  method: String,
  amount: Number,
  status: { type: Boolean, default: false },
});

export default mongoose.model('Payment', paymentSchema);
