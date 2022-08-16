require("dotenv").config();
const nodemailer = require("nodemailer");

const { META_UA } = process.env;
const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user:"dovgand887@meta.ua",
    pass:META_UA
  }
  
}

const email = {
  to: "dovgand887@gmail.com",
  from: "dovgand887@meta.ua",
  subject: "New lter",
  html:"<p>New leter</p>"
}
const transportr = nodemailer.createTransport(nodemailerConfig);
transportr.sendMail(email);
