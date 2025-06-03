const express = require('express');
const Customer = require('../models/customer');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const customers = await Customer.findAll();
  res.json(customers);
});

module.exports = router;
