import Course from '../models/courseModel.js';

export default {
  getCourses: async (req, res) => {
    try {
      let filter = {};
      if (req.query.category) filter.category = req.query.category;
      if (req.query.price_lte) filter.price = { $lte: parseFloat(req.query.price_lte) };

      const courses = await Course.find(filter);
      res.json(courses);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getCourseById: async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) return res.status(404).json({ error: 'Курс не найден' });
      res.json(course);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createCourse: async (req, res) => {
    try {
      const course = new Course(req.body);
      await course.save();
      res.status(201).json(course);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateCourse: async (req, res) => {
    try {
      const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!course) return res.status(404).json({ error: 'Курс не найден' });
      res.json(course);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deleteCourse: async (req, res) => {
    try {
      const course = await Course.findByIdAndDelete(req.params.id);
      if (!course) return res.status(404).json({ error: 'Курс не найден' });
      res.json({ message: 'Курс удален' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};