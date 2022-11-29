const { naverService } = require('../services');
const { catchAsync } = require('../utils/error');

const reqAuthCode = catchAsync(async(req, res) => {
  const apiURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NAVER_CLIENT_ID}&redirect_uri=http://127.0.0.1:3000/naver/callback&state=test`;

  return res.redirect(apiURL);
});

const getNaverToken = catchAsync(async(req, res) => {
  const authCode = req.query.code;
  const state = req.query.state;
  const apiURL = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${process.env.NAVER_CLIENT_ID}&client_secret=${process.env.NAVER_CLIENT_SECRET}&redirect_uri=http://127.0.0.1:3000/naver/callback&code=${authCode}&state=${state}`;

  const result = await naverService.signInWithToken(apiURL);
  console.log(result, "jwt토큰");

  return res.status(200).json({ result })
  // res.render('service');
})

module.exports = {
  reqAuthCode,
  getNaverToken
}