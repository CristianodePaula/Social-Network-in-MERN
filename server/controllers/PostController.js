const PostModel = require ("../Models/Post")
const UserModel= require( "../models/User")
const mongoose = require('mongoose')

const createPost = async (req, res) => {
  const newPost = new PostModel(req.body)

  try {
    await newPost.save();
    res.status(200).json("Post criado com sucesso!")
  } catch (error) {
    res.status(500).json(error)
  }
}

const getPost = async (req, res) => {
  const id = req.params.id

  try {
    const post = await PostModel.findById(id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

const updatePost = async (req, res) => {
  const postId = req.params.id
  const { userId } = req.body

  try {
    const post = await PostModel.findById(postId)
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body })
      res.status(200).json("Post atualizado com sucesso")
    } else {
      res.status(403).json("Acesso negado")
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const deletePost = async (req, res) => {
  const id = req.params.id
  const { userId } = req.body

  try {
    const post = await PostModel.findById(id)
    if (post.userId === userId) {
      await post.deleteOne()
      res.status(200).json("Post deletado com sucesso")
    } else {
      res.status(403).json("Acesso negadon")
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

const likePost = async (req, res) => {
  const id = req.params.id
  const { userId } = req.body
  try {
    const post = await PostModel.findById(id)
    if (post.likes.includes(userId)) {
      await post.updateOne({ $pull: { likes: userId } })
      res.status(200).json("Postagem curtida com sucesso")
    } else {
      await post.updateOne({ $push: { likes: userId } })
      res.status(200).json("Postagem descurtida com sucesso")
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const getTimelinePosts = async (req, res) => {
  const userId = req.params.id

  try {
    const currentUserPosts = await PostModel.find({ userId: userId })
    const followingPosts = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ])

    res
      .status(200)
      .json(currentUserPosts.concat(...followingPosts[0].followingPosts)
      .sort((a,b)=>{
          return b.createdAt - a.createdAt
      })
      )
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = { 
  createPost,
  getPost,
  updatePost,
  deletePost,
  likePost,
  getTimelinePosts
}