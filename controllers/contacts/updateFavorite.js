const Contact = require("../../models/contact");
const { createError } = require("../../helpers");
const { updateFavoriteSchema} = require("../../validation/joiValidation");
const updateFavorite = async (req, res, next) => {
  console.log(req.user)
   const { _id:owner } = req.user;
  try {
    const id = req.params.contactId;
    const {error}=updateFavoriteSchema.validate(req.body)
    if (error || Object.keys(req.body).length === 0) {
      throw createError(400,"missing field favorite")
    }
    const contact = await Contact.findOneAndUpdate({_id:id,owner:owner}, req.body, {new:true })
    if (!contact) {
      throw createError(404,"Not found")
    }
    res.json(contact)
    
  } catch (error) {
    next(error)
  }
  
}
module.exports = updateFavorite;