const Contact = require("../../models/contact");
const { createError } = require("../../helpers");
const { updateFavoriteSchema} = require("../../validation/joiValidation");
const updateFavorite=async (req, res, next) => {
  try {
    const {error}=updateFavoriteSchema.validate(req.body)
    if (error || Object.keys(req.body).length === 0) {
      throw createError(400,"missing field favorite")
    }
    const contact = await Contact.findByIdAndUpdate(req.params.contactId, req.body, {new:true })
    if (!contact) {
      throw createError(404,"Not found")
    }
    res.json(contact)
    
  } catch (error) {
    next(error)
  }
  
}
module.exports = updateFavorite;