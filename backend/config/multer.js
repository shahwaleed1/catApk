import multer from "multer";
import path from "path";
import fs from "fs"



const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    },
});


export const upload = multer({ storage })

