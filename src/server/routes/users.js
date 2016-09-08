const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
  knex('users').select()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      return next(err);
    });
});

module.exports = router;
