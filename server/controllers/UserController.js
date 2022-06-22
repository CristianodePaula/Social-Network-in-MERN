const UserModel= require( "../models/User")
const bcrypt = require('bcrypt')

const getUser = async (req, res) => {
  const id = req.params.id

  try {
    const user = await UserModel.findById(id)

    if (user) {
      const { password, ...otherDetails } = user._doc

      res.status(200).json(otherDetails)
    } else {
      res.status(404).json("Este usuário não existe")
    }
  } catch (error) {
    res.status(500).json(error)
  }
}


const updateUser = async (req, res) => {
  const id = req.params.id
  const { currentUserId, currentUserAdminStatus, password } = req.body

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(password, salt)
      }

      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      })

      res.status(200).json(user)
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("Acesso negado! Você só pode atualizar seu próprio perfil")
  }
}

const deleteUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId, currentUserAdminStatus } = req.body

  if (currentUserId === id || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id)
      res.status(200).json("Usuário deletado com sucesso!")
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("Acesso negado! Você só pode excluir seu próprio perfil")
  }
}

const followUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId } = req.body

  if (currentUserId === id) {
    res.status(403).json("Acesso negado!")
  } else {
    try {
      const followUser = await UserModel.findById(id)
      const followingUser = await UserModel.findById(currentUserId)

      if (!followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $push: { followers: currentUserId } })
        await followingUser.updateOne({ $push: { following: id } })
        res.status(200).json("Usuário seguido")
      } else {
        res.status(403).json("O usuário já é seguido por você")
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

const UnFollowUser = async (req, res) => {
  const id = req.params.id

  const { currentUserId } = req.body

  if (currentUserId === id) {
    res.status(403).json("Acesso negado!")
  } else {
    try {
      const followUser = await UserModel.findById(id)
      const followingUser = await UserModel.findById(currentUserId)

      if (followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $pull: { followers: currentUserId } })
        await followingUser.updateOne({ $pull: { following: id } })
        res.status(200).json("Usuário não seguido!")
      } else {
        res.status(403).json("O usuário não é seguido por você")
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = { 
  getUser,
  updateUser,
  deleteUser,
  followUser,
  UnFollowUser
}