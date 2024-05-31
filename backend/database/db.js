const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(
        `Mongodb connection established successfully to ${data.connection.host}. `
      );
    })
    .catch((err) => {
      console.log(`Db Connection Error: ${err}`);
    });
};

module.exports = connectDatabase;
