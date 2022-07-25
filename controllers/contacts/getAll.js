const Contact = require("../../models/contact");
const getAll = async (req, res, next) => {
  try {
    const list = await Contact.find({},{createdAt:0,updatedAt:0});
  res.json(list);
    
  } catch (error) {
    next(error)
  }
}
module.exports = getAll;