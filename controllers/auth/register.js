const { createError,sendMail } = require("../../helpers");
const bcrypt=require("bcryptjs")
const User=require("../../models/user")
const { registerAuthSchema } = require("../../validation/joiValidation");
const gravatar = require("gravatar");
const uniqid = require('uniqid'); 

const register = async (req, res, next) => {
    try {
    console.log(req.body)
    const {error}=registerAuthSchema.validate(req.body)
    if (error) {
      throw createError(400,"Ошибка от Joi или другой библиотеки валидации")
        }
        const { email,password } = req.body;

      const auth = await User.findOne({ email: email });
      if (auth) {
        console.log("exist already")
        throw createError(409, `${email} is use`);
      }
      console.log(password)
      const hashPassword = await bcrypt.hash(password,10);
       console.log("result",hashPassword)
      const avatarUrl = gravatar.url(email);
      const verificationToken = uniqid();
      const result = await User.create({ ...req.body, password: hashPassword, avatarUrl, verificationToken });
      const mail = {
        to: email,
        subject: "Підтвердіть реєстрацію",
        html:`<a target="_blank" href=http://localhost:3000/api/users/verify/:${verificationToken}>Натисніть для підтвердження реєстрації</a>`
      }
      await sendMail(mail)
      res.status(201).json({ user: { email: result.email, subscription: result.subscription ,avatarUrl:result.avatarUrl} });
    } catch (error) {
      console.log("error")
   next(error);
  }
}
module.exports = register;