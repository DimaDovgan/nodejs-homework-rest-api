const Contact = require("../../models/contact");
const {createError}=require("../../helpers")
const getContactById = async (req, res, next) => {
  try {
    const id = req.params.contactId;
  const contact = await Contact.findOne({_id:id},{createdAt:0,updatedAt:0});
    if (!contact) {
      throw createError(404,"Not found")
    }
    res.json( contact);
  } catch (err) {
    next(err);
}
}
module.exports=getContactById