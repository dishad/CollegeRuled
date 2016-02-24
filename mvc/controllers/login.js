module.exports = function(app) {
  app.route('/login').get(function(req, res) {
    var model = require('models/global')(req, res);
    model.content.pageTitle = '{content.appTitle} - Login';
    res.render('login', model);
  });
};