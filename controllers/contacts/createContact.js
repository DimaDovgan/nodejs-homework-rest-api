const Contact = require("../../models/contact");
const { createError } = require("../../helpers");
const {addContactSchema}= require("../../validation/joiValidation")
const createContact=async (req, res, next) => {
  try {
    console.log(req.user.id)
    const { error } = addContactSchema.validate(req.body)
    if (error) {
      throw createError(400, "missing required name field")
    }
    const { id: owner } = req.user
    console.log(owner);
    const contact = await Contact.create({...req.body, owner});
    res.status(201).json(contact);
  } catch (error) {
    console.log(error)
   next(error);
  }
  
}
module.exports = createContact;