const express = require('express');
const ctrl=require("../../controllers/contacts")

const router = express.Router()

// DB_host = mongodb+srv://Dima:BUVu1QfgRgpjb1RZ@cluster0.trx80dd.mongodb.net/db-contacts?retryWrites=true&w=majority

router.get('/' ,ctrl.getAll)

router.get('/:contactId',ctrl.getContactById)

router.post('/',ctrl.createContact )

router.delete('/:contactId', ctrl.delateContactById)

router.put('/:contactId', ctrl.updateContact);
router.patch("/:contactId/favorite",ctrl.updateFavorite )

module.exports = router
