const express = require('express');
const router = express.Router();

const ArticlesController = require('../controllers/articles/index')
const ArticlesShowController = require('../controllers/articles/show')


/* GET home page. */
router.get('/articles', ArticlesController);
router.get('/articles/:id', ArticlesShowController)

module.exports = router;
