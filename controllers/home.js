/**
 * GET /
 */
exports.index = function(req, res) {
  res.render('dashboard', {
    title: 'Home'
  });
};
