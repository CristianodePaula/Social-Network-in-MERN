const express = require('express')
const { createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost, getAllPosts } = require("../controllers/PostController")
const router = express.Router()

router.post('/', createPost)
router.get('/', getAllPosts)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete("/:id", deletePost)
router.put("/:id/like", likePost)
router.get("/:id/timeline", getTimelinePosts)

module.exports = router