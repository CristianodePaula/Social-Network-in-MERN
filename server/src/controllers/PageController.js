const PageModel = require ("../Models/Page")
const UserModel= require( "../models/User")
const mongoose = require('mongoose')

const createPage = async (req, res) => {
  const newPage = new PageModel(req.body)

  try {
    await newPage.save();
    res.status(200).json("Página criada com sucesso!")
  } catch (error) {
    res.status(500).json(error)
  }
}

const getPage = async (req, res) => {
  const id = req.params.id

  try {
    const page = await PageModel.findById(id)
    res.status(200).json(page)
  } catch (error) {
    res.status(500).json(error)
  }
}
const getAllPages = async (req, res) => {
  const id = req.params.id

  try {
    const page = await PageModel.find(id)
    res.status(200).json(page)
  } catch (error) {
    res.status(500).json(error)
  }
}
const updatePage = async (req, res) => {
  const pageId = req.params.id
  const { userId } = req.body

  try {
    const page = await PageModel.findById(pageId)
    if (page.pageId === userId) {
      await page.updateOne({ $set: req.body })
      res.status(200).json("Página atualizada com sucesso")
    } else {
      res.status(403).json("Acesso negado")
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const deletePage = async (req, res) => {
  const id = req.params.id
  const { userId } = req.body

  try {
    const page = await PageModel.findById(id)
    if (page.userId === userId) {
      await page.deleteOne()
      res.status(200).json("Página deletada com sucesso")
    } else {
      res.status(403).json("Acesso negado")
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const likePage = async (req, res) => {
  const id = req.params.id
  const { userId } = req.body
  try {
    const page = await PageModel.findById(id)
    if (page.likes.includes(userId)) {
      await page.updateOne({ $push: { likes: userId } })
      res.status(200).json("Página curtida com sucesso")
    } else {
      await page.updateOne({ $pull: { likes: userId } })
      res.status(200).json("Página descurtida com sucesso")
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const getTimelinePages = async (req, res) => {
  const userId = req.params.id

  try {
    const currentUserPages = await PageModel.find({ userId: userId })
    const followingPagess = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "pages",
          localField: "following",
          foreignField: "userId",
          as: "followingPagess",
        },
      },
      {
        $project: {
          followingPages: 1,
          _id: 0,
        },
      },
    ])

    res
      .status(200)
      .json(currentUserPagess.concat(...followingPagess[0].followingPages)
      .sort((a,b)=>{
          return b.createdAt - a.createdAt
      })
      )
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = { 
  createPage,
  getPage,
  getAllPages,
  updatePage,
  deletePage,
  likePage,
  getTimelinePages
}