import express from "express";
import contactController from "../controllers/contactController.js"
import contactValidate from "../middlewares/contactValidate.js";

const router = express.Router();

const deleteContact = contactValidate.deleteContact;
const validateContact = contactValidate.validateContact;

router.post("/registerContact", validateContact, contactController.registerContact);
router.get("/listContact", contactController.listContact);
router.get("/listContact/:name?", contactController.listContact);
router.delete("/deleteContact/:name?", deleteContact, contactController.deleteContact);
router.get("/existingContact", contactController.existingContact);

export default router;