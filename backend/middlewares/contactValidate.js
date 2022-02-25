import contact from "../models/contact.js";

//Valida que el nombre a eliminar sea exacto
const deleteContact = async (req, res, next) => {
  //Valida que el nombre enviado por el routes este exactamente igual al del la bd
  const contactDel = await contact.findOne({ name: req.params["name"] });

  if (!contactDel) return res.status(400).send({ message: "Contact no found." });

  next()

};



const validateContact = async (req, res, next) => {

  const contactExtist = await contact.findOne({ name: req.params["name"] });

  if (!contactExtist) return res.status(400).send({ message: "Contact already exist." });

  next()

};


export default { deleteContact, validateContact };