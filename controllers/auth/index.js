const register = require('./register');
const login = require("./login");
const current = require("./current");
const logout = require("./logout");
const subscriptionUpdate=require("./subscriptionUpdate")
module.exports = {
    register,
    login,
    current,
    logout,
    subscriptionUpdate,
}