const router = express.Router()
const multer = require('multer')

const uploadImage = async (req, res) => {
    const upload = multer({ storage: storage })
    try {
        return res.status(200).json("Arquivo adicionado com sucesso!")
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    uploadImage
}