// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "nodejs",
//   password: "12345678",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejs", "root", "12345678", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
