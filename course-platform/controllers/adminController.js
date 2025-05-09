import Student from '../models/studentModel.js';
import Course from '../models/courseModel.js';
import Enrollment from '../models/enrollmentModel.js';

export default {
  getStats: async (req, res) => {
    try {
      const [studentsCount, coursesCount, enrollmentsCount] = await Promise.all([
        Student.countDocuments(),
        Course.countDocuments(),
        Enrollment.countDocuments()
      ]);

      res.json({
        totalStudents: studentsCount,
        totalCourses: coursesCount,
        totalEnrollments: enrollmentsCount
      });
    } catch (err) {
      res.status(500).json({ error: 'Ошибка при получении статистики' });
    }
  }
};
