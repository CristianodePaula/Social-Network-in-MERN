const express = require('express')
const { 
    createContact,
    getAllContacts,
    deleteContact
 } = require("../controllers/ContactController")
const router = express.Router()

router.post('/', createContact)
router.get('/', getAllContacts)
router.delete("/:id", deleteContact)

module.exports = router