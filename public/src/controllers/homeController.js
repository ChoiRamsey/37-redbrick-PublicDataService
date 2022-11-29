const { catchAsync } = require('../utils/error');

const showHome = catchAsync(async (req, res) => {
  res.render('home');
});

const mainService = catchAsync(async (req, res) => {
  res.render('service');
});

module.exports = {
  showHome,
  mainService
}