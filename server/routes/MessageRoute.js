const express = require('express')
const {
    createContact,
    deleteContact
} = require("../controllers/MessageController")

const router = express.Router()

router.post('/', createContact)
router.delete('/:id', deleteContact)

module.exports = router