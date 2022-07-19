const express = require('express')
const { deleteUser, followUser, getUser, getAllUsers, unfollowUser, updateUser } = require ("../controllers/UserController")
const router = express.Router()

router.get('/:id', getUser)
router.get('/', getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unfollowUser)

module.exports = router