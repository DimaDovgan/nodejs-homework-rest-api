const express = require('express');
const ctrl=require("../../controllers/contacts")
const { auth } = require("../../middlewares");
const router = express.Router()

// DB_host = mongodb+srv://Dima:BUVu1QfgRgpjb1RZ@cluster0.trx80dd.mongodb.net/db-contacts?retryWrites=true&w=majority

router.get('/' ,auth,ctrl.getAll)

router.get('/:contactId', auth, ctrl.getContactById)

router.post('/',auth,ctrl.createContact )

router.delete('/:contactId',auth, ctrl.delateContactById)

router.put('/:contactId',auth, ctrl.updateContact);
router.patch("/:contactId/favorite", auth, ctrl.updateFavorite)

module.exports = router
