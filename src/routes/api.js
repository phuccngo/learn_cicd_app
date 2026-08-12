const express = require('express');
const router = express.Router();

// Route GET /api/status
router.get('/status', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// Route POST /api/data
router.post('/data', (req, res) => {
  const { message } = req.body;
  
  // Kiểm tra dữ liệu đầu vào đơn giản
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  res.status(200).json({
    success: true,
    receivedData: message
  });
});

module.exports = router;