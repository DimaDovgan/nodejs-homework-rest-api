const express = require('express');
const ctrl=require("../../controllers/contacts")

const router = express.Router()


router.get('/' ,ctrl.getAll)

router.get('/:contactId',ctrl.getContactById)

router.post('/',ctrl.createContact )

router.delete('/:contactId', ctrl.delateContactById)

router.put('/:contactId', ctrl.updateContact);
router.patch("/:contactId/favorite",ctrl.updateFavorite )

module.exports = router
