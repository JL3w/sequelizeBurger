require("dotenv").config();
module.exports = 

{
  "development": {
    "username": "root",
    "password": process.env.CONFIG_PASSWORD,
    "database": "burgers_db",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
