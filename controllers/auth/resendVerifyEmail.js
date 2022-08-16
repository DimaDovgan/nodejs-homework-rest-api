const { createError } = require("../../helpers");
const User = require("../../models/user");
const { verifyEmail } = require("../../validation/joiValidation");
const sendMail=require("../../helpers/sendMail")

const resendVerifyEmail = async (req, res) => {

    const { error } = verifyEmail.validate(req.body);
    if (error) {
        throw createError(400,"Помилка від Joi або іншої бібліотеки валідації")
    }
    console.log(req.body.email)
    const user = await User.findOne({ email: req.body.email })
   
    if (!user) {
        throw createError(404,"Not found")
    }
    if (user.verify) {
        throw createError(400,"Verification has already been passed")
    }
    const mail = {
        to: user.email,
        subject: "Підтвердіть реєстрацію",
        html:`<a target="_blank" href=http://localhost:3000/api/users/verify/:${user.verificationToken}>Натисніть для підтвердження реєстрації</a>`
      }
    await sendMail(mail);
    res.json({"message": "Verification email sent"})
}
module.exports = resendVerifyEmail;