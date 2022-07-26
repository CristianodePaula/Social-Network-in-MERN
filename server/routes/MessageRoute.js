const express = require('express')
const {
    addMessage,
    getMessages
} = require("../controllers/MessageController")

const router = express.Router()

router.post('/', addMessage);
router.get('/:chatId', getMessages);

module.exports = router