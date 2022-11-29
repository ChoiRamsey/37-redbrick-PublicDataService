const { busService } = require('../services');
const { catchAsync } = require('../utils/error');

const getBusStops = catchAsync(async(req, res) => {
  const { keyword } = req.params;
  const platformNum = req.platform;

  if ( platformNum !== 1 ) {
    const error = new Error('PLEASE_LOGIN_WITH_NAVER');
    error.statusCode = 400;
    throw error;
  }
  
  const result = await busService.getBusStops(keyword);
  
  return res.status(200).json(result);
})

const getPassengersByLine = catchAsync(async(req, res) => {
  const { busNum } = req.query;

  const result = await busService.getPassengersByLine(busNum);
  
  return res.status(200).json(result);
})

module.exports = {
  getBusStops,
  getPassengersByLine
}