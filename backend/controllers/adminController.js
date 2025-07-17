import adminModel from "../models/adminModel.js";
import bcrypt, { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const register = async(req, res) => {
    const { name, email, password } = req.body;
    
    try{

        const isEmail = await adminModel.findOne({ email });
        if(isEmail){
            return res.status(200).json({ isEmail: true, message: 'This Gmail alread exsited.'})
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newAdmin = new adminModel({ name, email, password : hashPassword });
        await newAdmin.save()

        // const token = jwt.sign({id: admins._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        // res.cookie('token', token, {
        //     httpOnly: true,
        //     secure: false,
        //     sameSite: 'strict',
        // });

        return res.status(200).json({ isMatch: false, message: 'Successfully registered!'});

    }

    catch(err){
        return res.status(500).json({ message: 'Error in register page:' , err})
    }
}




export const login = async(req, res) => {

    const { email, password } = req.body;

    try{
        const admin = await adminModel.findOne({ email });
        if(!admin){
            return res.status(404).json({ message: 'Not Found' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch){
            return res.status(401).json({ message: 'Incurrect Password' });
        }

        return res.status(200).json({ message: 'Login successful!'})
    }
    catch(err){
        return res.status(500).json({ message: 'Error in login page :', err})
    }
}