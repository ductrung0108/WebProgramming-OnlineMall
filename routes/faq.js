const express = require('express');
const router = express.Router();

// Route to render the fees page
router.get('/', (req, res) => {
    res.render('faq', { title: 'FAQ' });
  });

module.exports = router;