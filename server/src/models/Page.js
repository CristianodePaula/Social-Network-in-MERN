const mongoose = require('mongoose')

const PageSchema = mongoose.Schema(
    {
     
        pagename: {
            type: String,
        },
        isAdmin : {
            type: Boolean,
            default: false,
        },
        profilePicture: String,
        coverPicture: String,
        cause: String,
        desc: String,
        email: String,
        address: String,
        followers: [] ,
        following: []
    },
    {timestamps: true}
)

module.exports = mongoose.model("Page", PageSchema)