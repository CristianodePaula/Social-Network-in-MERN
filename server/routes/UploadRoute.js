const router = require("express").Router()
const multer = require('multer')
//const { uploadImage } = require("../controllers/UploadController")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images")
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name)
    },
  })

const upload = multer({ storage: storage })

//  router.post('/', upload.single("file"), uploadImage)

router.post("/", upload.single("file"), async (req, res) => {
    try {
      return res.status(200).json("Arquivo adicionado com sucesso!")
    } catch (error) {
      console.error(error)
    }
  })

module.exports = router

