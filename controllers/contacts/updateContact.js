const Contact = require("../../models/contact");
const { createError } = require("../../helpers");
const { updateContactSchema } = require("../../validation/joiValidation");
const updateContact=async (req, res, next) => {
  try {
    const {error}=updateContactSchema.validate(req.body)
    if (error || Object.keys(req.body).length === 0) {
      throw createError(400,"missing fields")
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
module.exports = updateContact;