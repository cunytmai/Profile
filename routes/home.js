// home.js

const router = require('express').Router();
const request = require('request');

router.get('/', (req, res) => {
  res.render('home/home');
});

module.exports = router;
