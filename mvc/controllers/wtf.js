module.exports = function(app) {
  app.route('/wtf').get(function(req, res) {
    var model = require('models/global')(req, res);
    model.content.pageTitle = '{content.appTitle} - Wtf?';
    res.render('wtf', model);
  });
};