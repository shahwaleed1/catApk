import express from 'express';
import { login, register } from '../controllers/adminController.js';
import multer from "multer";


const adminRoutes = express.Router();



const upload = multer({ dest : 'uploads/adminPic'});

adminRoutes.post('/register', upload.single('avatar'), register);
adminRoutes.post('/login', login);

export default adminRoutes;