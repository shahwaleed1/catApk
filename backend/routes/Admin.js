import express from 'express';
import { login, register } from '../controllers/adminController.js';
import { upload } from '../config/multer.js';


const adminRoutes = express.Router();

adminRoutes.post('/register', upload.single('image'), register);
adminRoutes.post('/login', login);

export default adminRoutes;