export default {
  createPayment: async (req, res) => {
    try {
      const payment = new req.db.Payment(req.body);
      await payment.save();
      res.status(201).json(payment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getPayments: async (req, res) => {
    try {
      const payments = await req.db.Payment.find();
      res.json(payments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getPaymentById: async (req, res) => {
    try {
      const payment = await req.db.Payment.findById(req.params.id);
      if (!payment) return res.status(404).json({ error: 'Платёж не найден' });
      res.json(payment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updatePayment: async (req, res) => {
    try {
      const payment = await req.db.Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!payment) return res.status(404).json({ error: 'Платёж не найден' });
      res.json(payment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deletePayment: async (req, res) => {
    try {
      const payment = await req.db.Payment.findByIdAndDelete(req.params.id);
      if (!payment) return res.status(404).json({ error: 'Платёж не найден' });
      res.json({ message: 'Платёж удален' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
