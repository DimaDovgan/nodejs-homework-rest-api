const Joi = require('joi');

const addContactSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  favorite:Joi.boolean(),

})
const updateContactSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  phone: Joi.string().length(10).pattern(/^[0-9]+$/),
  favorite:Joi.boolean(),

})
const updateFavoriteSchema = Joi.object({
  favorite:Joi.boolean().required(),
})

module.exports = {
    addContactSchema,
    updateContactSchema,
    updateFavoriteSchema,
}