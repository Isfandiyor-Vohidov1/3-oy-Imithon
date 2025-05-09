import Student from '../models/studentModel.js';
import { generateToken } from '../utils/jwtUtils.js';
import bcrypt from 'bcrypt';

export default {
  getStudents: async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getStudentById: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      if (!student) return res.status(404).json({ error: 'Студент не найден' });
      res.json(student);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createStudent: async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      const token = generateToken(student._id);
      res.status(201).json({ student, token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateStudent: async (req, res) => {
    try {
      const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!student) return res.status(404).json({ error: 'Студент не найден' });
      res.json(student);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deleteStudent: async (req, res) => {
    try {
      const student = await Student.findByIdAndDelete(req.params.id);
      if (!student) return res.status(404).json({ error: 'Студент не найден' });
      res.json({ message: 'Студент удален' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const student = await Student.findOne({ email });

      if (!student || !(await bcrypt.compare(password, student.password))) {
        return res.status(401).json({ error: 'Неверные учетные данные' });
      }

      const token = generateToken(student._id);
      res.json({ token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};