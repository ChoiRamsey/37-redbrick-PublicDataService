const { dustService } = require("../services");
const { catchAsync } = require("../utils/error");

const getApi = (req, res) => {
  
  // const { id, platform } = req;
  // console.log(id, platform);
  // if (!id || !platform) {
  //   throw new Error("id KEY_ERROR");
  // }

  let data;
  const { SERVICE } = req.query;
  data = SERVICE;
  if (data == "yearMicroDustInfo") {
    getDust(req, res);
  } else if (data == "shuntPlace") {
    getDustShelter(req, res);
  } else {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }
};

const getDust = catchAsync(async (req, res) => {
  const { SERVICE } = req.query;

  if (!SERVICE) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }

  const result = await dustService.getDust(SERVICE);
  return res.status(200).json({ data: result });
});

const getDustShelter = catchAsync(async (req, res) => {
  const { SERVICE } = req.query;
  if (!SERVICE) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }

  const result = await dustService.getDustShelter(SERVICE);
  return res.status(200).json({ data: result });
});

module.exports = {
  getApi,
  getDust,
  getDustShelter,
};
