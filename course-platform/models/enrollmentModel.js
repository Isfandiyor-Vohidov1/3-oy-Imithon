import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  courseId: mongoose.Schema.Types.ObjectId,
  startDate: Date,
});

export default mongoose.model('Enrollment', enrollmentSchema);
