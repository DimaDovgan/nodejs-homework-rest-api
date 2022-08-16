// require("dotenv").config();
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
const transportr = nodemailer.createTransport(nodemailerConfig);

const sendMail = async (data) => {
    try {
        const email = { ...data, from: "dovgand887@meta.ua" };
        transportr.sendMail(email);
    } catch (error) {
        throw error;
    }
}
module.exports = sendMail;