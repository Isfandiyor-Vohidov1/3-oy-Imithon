export default {
  getGroups: async (req, res) => {
    try {
      const groups = await req.db.Group.find();
      res.json(groups);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getGroupById: async (req, res) => {
    try {
      const group = await req.db.Group.findById(req.params.id);
      if (!group) return res.status(404).json({ error: 'Группа не найдена' });
      res.json(group);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createGroup: async (req, res) => {
    try {
      const group = new req.db.Group(req.body);
      await group.save();
      res.status(201).json(group);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateGroup: async (req, res) => {
    try {
      const group = await req.db.Group.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!group) return res.status(404).json({ error: 'Группа не найдена' });
      res.json(group);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deleteGroup: async (req, res) => {
    try {
      const group = await req.db.Group.findByIdAndDelete(req.params.id);
      if (!group) return res.status(404).json({ error: 'Группа не найдена' });
      res.json({ message: 'Группа удалена' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
