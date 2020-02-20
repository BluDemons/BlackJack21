const Sequelize = require("sequelize");

const db = {};

const sequelize = new Sequelize("blackjack", "root", "12345678", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
