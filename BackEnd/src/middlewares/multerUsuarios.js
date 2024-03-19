const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/img/usuarios'));
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + '_IMG_PERFIL' + path.extname(file.originalname);
        cb(null, fileName);
    }
})

const uploadFile = multer({ storage });

module.exports = uploadFile;