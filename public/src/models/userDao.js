const dataSource = require("./dataSource");

const getUserByEmail = async (email) => {
  const result = await dataSource.query(
    `SELECT 
        users.id,
        users.platform
    FROM users
    WHERE email = ?
    AND platform = 3`,
    [email]
  );
  return result;
};

const createUser = async (email, name, platform) => {
  return await dataSource.query(
    `INSERT INTO users(
            email,
            name,
            platform
            ) VALUES (?, ?, ?)
            `,
    [email, name, platform]
  );
};

module.exports = {
  getUserByEmail,
  createUser,
};
