const { naverDao } = require('../models');
const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');

const signInWithToken = async(apiURL) => {
  const reqAccessToken = await (await fetch(apiURL, {
    method : "POST",
    headers : {'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID, 'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET}
  })
  ).json();

  const accessToken = reqAccessToken["access_token"];
  const reqHeader = "Bearer " + accessToken;

  const userInfo = await (
    await fetch("https://openapi.naver.com/v1/nid/me", {
      headers : { "Authorization" : reqHeader }
    })
  ).json();
  
  const email = userInfo.response.email;
  const name = userInfo.response.nickname;
  const gender = userInfo.response.gender;
  
  const today = new Date();
  const age = today.getFullYear() - userInfo.response.birthyear + 1;
  
  let validUser = await naverDao.getUserByEmail(email);

  if (!validUser) {
    await naverDao.createUser(email, name, gender, age);
    validUser = await naverDao.getUserByEmail(email);
  }
  
  const serviceToken = jwt.sign({
    id : validUser.id,
    platform : validUser.platform
  }, process.env.JWT_KEY, {
    algorithm: process.env.ALGORITHM,
    expiresIn: process.env.JWT_EXPIRES_IN
  });
  
  return serviceToken;
}

module.exports = {
  signInWithToken
}