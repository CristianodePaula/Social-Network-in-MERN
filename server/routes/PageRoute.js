const express = require('express')
const {
    createPage,
    deletePage,
    getPage,
    getTimelinePages,
    likePage,
    updatePage
} = require("../controllers/PageController")
const router = express.Router()

router.post('/', createPage)
router.get('/:id', getPage)
router.put('/:id', updatePage)
router.delete("/:id", deletePage)
router.put("/:id/like", likePage)
router.get("/:id/timeline", getTimelinePages)

module.exports = router