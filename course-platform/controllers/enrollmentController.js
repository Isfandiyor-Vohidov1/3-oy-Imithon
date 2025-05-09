import Enrollment from '../models/enrollmentModel.js';
import Course from '../models/courseModel.js';
import Student from '../models/studentModel.js';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default {
  enrollCourse: async (req, res) => {
    try {
      const { courseId } = req.body;
      const studentId = req.user.userId;

      const enrollment = new Enrollment({ studentId, courseId });
      await enrollment.save();

      const course = await Course.findById(courseId);
      const student = await Student.findById(studentId);

      await transporter.sendMail({
        to: student.email,
        subject: 'Вы записались на курс!',
        text: `Вы успешно записаны на курс "\${course.title}"`,
      });

      res.status(201).json(enrollment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
