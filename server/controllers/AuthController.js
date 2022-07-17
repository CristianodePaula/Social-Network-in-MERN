const UserModel= require( "../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {

  const salt = await bcrypt.genSalt(10)
  const hashedPass = await bcrypt.hash(req.body.password, salt)
  req.body.password = hashedPass
  const newUser = new UserModel(req.body)
  const {username} = req.body
  try {
    const oldUser = await UserModel.findOne({ username })

    if (oldUser)
      return res.status(400).json({ message: "O usuário já este registrado" })

    const user = await newUser.save()
    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.JWTKEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user, token })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const loginUser = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await UserModel.findOne({ username: username })

    if (user) {
      const validity = await bcrypt.compare(password, user.password)

      if (!validity) {
        res.status(400).json("Senha Errada")
      } else {
        const token = jwt.sign(
          { username: user.username, id: user._id },
          process.env.JWTKEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({ user, token })
      }
    } else {
      res.status(404).json("Usuário não encontrado")
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = { 
  registerUser,
  loginUser
}