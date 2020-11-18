const articles = require('../../db/articles.json')

module.exports = function(req, res, next){
  res.send(articles)
}
