const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        require: true,
    }, 
    message: {
        type: String,
        require: true,
    },
    }, { timestamps: true} 
)

module.exports = mongoose.model("Contact", ContactSchema)