const dataSource = require('./dataSource')

const getUserByEmail = async (email) => {
  const result = await dataSource.query(
    `SELECT
      id,
      email,
      platform
    FROM users
    WHERE
      email = ? AND
      platform = 1
    `, [ email ]
  );
  
  return result[0];
}

const createUser = async (email, name, gender, age) => {
  const result = await dataSource.query(
    `INSERT INTO users(
      email,
      name,
      gender,
      age,
      platform
    ) VALUES (?, ?, ?, ?, 1)
    `, [ email, name, gender, age ]
  );

  return result;
}

module.exports = {
  getUserByEmail,
  createUser
}