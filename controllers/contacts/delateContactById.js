const Contact = require("../../models/contact");
const { createError } = require("../../helpers");

const delateContactById = async (req, res, next) => {
  const { id: owner } = req.user;
  console.log(owner,"owner")
  try { 
      const delateContact = await Contact.findOneAndRemove({ _id: req.params.contactId ,owner});
    
    if (!delateContact) {
      throw createError(404,"Not found")
    }
    res.json({ message : "contact deleted" });

  } catch(error)
  {
    next(error)
  }
}
module.exports = delateContactById;