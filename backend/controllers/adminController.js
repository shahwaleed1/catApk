import adminModel from "../models/adminModel";
import bcrypt, { hash } from 'bcryptjs'

export const register = async(req, res) => {
    const { name, email, password } = req.body;
    
    try{

        const newAdmin = new adminModel({ name, email, password });
        await newAdmin.save()

        return res.status(200).json({ message: 'successfull registion!'})
    }

    catch(err){
        return res.status(500).json({ message: err.message})
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
        return res.status(500).json({ message: err.message})
    }
}