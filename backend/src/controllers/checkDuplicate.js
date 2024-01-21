const pool = require('../database/connection');
const express = require('express');
const router = express.Router();

router.post('/check-duplicate', async (req, res) => {
  try {
    const { email, phone } = req.body;

    const emailExists = await pool.query(`SELECT * FROM clients WHERE email = '${email}'`);
    const phoneExists = await pool.query(`SELECT * FROM clients WHERE phone = '${phone}'`);

    if (emailExists.rows.length > 0 || phoneExists.rows.length > 0) {
      return res.status(400).json({ message: 'Email or phone already registered' });
    }

    return res.status(200).json({ message: 'Email and phone are available' });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
