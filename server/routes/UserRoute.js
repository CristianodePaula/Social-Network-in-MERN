const express = require('express')
const { deleteUser, followUser, getUser, UnFollowUser, updateUser } = require ("../controllers/UserController")
const router = express.Router()

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnFollowUser)

module.exports = router