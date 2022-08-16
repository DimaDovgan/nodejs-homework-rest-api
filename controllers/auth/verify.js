const User = require("../../models/user");
const { createError } = require("../../helpers");
const verify = async (req, res) => {
    const { verificationToken } = req.params;
    const user = await User.faindOne({ verificationToken: verificationToken })
    if (!user) {
        throw createError(404, 'User not found');
    }
    await User.findOneAndUpdate(user._id, { verificationToken: null, verify: true });
    res.json({
        message:'Verification successful'
    }
       )
}
module.exports = verify;