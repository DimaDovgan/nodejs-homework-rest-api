const app = require('./app');
const mongoose = require("mongoose");
const {DB_host,PORT=3000} = process.env;
mongoose.connect(DB_host).then(() => {
  app.listen(3000);
  console.log("Database connection successful")
} )
    .catch((error) => {
    console.log(error.message)
    process.exit(1)
});
