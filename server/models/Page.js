const mongoose = require('mongoose')

const PageSchema = mongoose.Schema(
    {
        pagename: {
            type: String,
            required: true
        },
        isAdmin : {
            type: Boolean,
            default: false,
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        address: String,
        livesin: String,
        worksAt: String,
        relationship: String,
        followers: [] ,
        following: []
    },
    {timestamps: true}
)

module.exports = mongoose.model("Page", PageSchema)