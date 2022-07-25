const Contact = require("../../models/contact");
const { createError } = require("../../helpers");
const {addContactSchema}= require("../../validation/joiValidation")
const createContact=async (req, res, next) => {
  try {
    console.log(req.body)
    const {error}=addContactSchema.validate(req.body)
    if (error) {
      throw createError(400,"missing required name field")
    }
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
   next(error);
  }
  
}
module.exports = createContact;