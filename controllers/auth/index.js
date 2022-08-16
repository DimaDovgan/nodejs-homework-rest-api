const register = require('./register');
const login = require("./login");
const current = require("./current");
const logout = require("./logout");
const subscriptionUpdate = require("./subscriptionUpdate");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerifyEmail=require("./resendVerifyEmail")
module.exports = {
    register,
    login,
    current,
    logout,
    subscriptionUpdate,
    updateAvatar,
    verify,
    resendVerifyEmail
}