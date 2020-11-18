const articles = require('../../db/articles.json')

module.exports = (req, res, next) => {
    const article = articles.find(article => article.id == req.params.id)
    res.send(article)
  }