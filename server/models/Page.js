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
        desc: String,
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