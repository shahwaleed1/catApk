import adminModel from "../models/adminModel";

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
        const admin = await adminModel.findOne({ email })
    }
    catch(err){
        return res.status(500).json({ message: err.message})
    }
}