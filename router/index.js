const express = require('express');
const router = express.Router();
const {
  home,
  red,
  signup
} = require('../app/controllers/controller');

router.get('/', home);
router.get('/admin', red);
router.get('/admin/signup', signup);
// router.get('/', (req, res) => {});
// router.get('/', (req, res) => {});
// router.get('/', (req, res) => {});
// router.get('/', (req, res) => {});

module.exports = router;