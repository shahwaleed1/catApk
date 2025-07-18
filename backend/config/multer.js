import multer from "multer";
import path from "path";
import fs from "fs"



const uploadPath = 'uploads';
if(!fs.existsSync(uploadPath)){
    fs.mkdirSync(uploadPath);
}


const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    },
});


export const upload = multer({ storage })

