require("dotenv").config();
const userDao = require("../models/userDao");
const jwt = require("jsonwebtoken");
const fetch = require('node-fetch');

const getToken = async (code) => {
  const response = await fetch(
    `https://graph.facebook.com/oauth/access_token?code=${code}&client_id=${process.env.FACEBOOK_CLIENT_ID}&client_secret=${process.env.FACEBOOK_CLIENT_SECRET}&grant_type=client_credentials`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  const token = data.access_token;

  const userInfo = await fetch(
    `https://graph.facebook.com/v15.0/${process.env.FACEBOOK_CLIENT_ID}?access_token=${token}`,
    {
      method: "GET",
    }
  );

  const result = await userInfo.json();
  const id = result.id;
  const email = id + "@facebook.com";
  const name = result.name;
  const platform = 3;

  const [user] = await userDao.getUserByEmail(email);

  if (!user) {
    await userDao.createUser(email, name, platform);
  }

  return jwt.sign(
    { id: user.id, platform: user.platform },
    process.env.JWT_KEY
  );
};

module.exports = {
  getToken,
};
