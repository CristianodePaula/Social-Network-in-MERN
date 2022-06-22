const express = require('express')
const {
    createContact,
    deleteContact
} = require("../controllers/ContactController")

const router = express.Router()

router.post('/', createContact)
router.delete('/:id', deleteContact)

module.exports = router