const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/auth");
const {auth,upload}=require("../../middlewares")
router.post('/signup', ctrl.register);
router.get('/login', ctrl.login);
router.get('/current', auth, ctrl.current);
router.post('/logout', auth, ctrl.logout);
router.patch('/', auth, ctrl.subscriptionUpdate);

router.patch('/avatars',auth,upload.single("avatar"), ctrl.updateAvatar);
module.exports = router;