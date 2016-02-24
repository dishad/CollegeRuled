module.exports = function(app) {
  app.route('/scratch').get(function(req, res) {
    var model = require('models/global')(req, res);
    model.content.pageTitle = '{content.appTitle} - Scratch Test';
    res.render('scratch', model);
  });
};