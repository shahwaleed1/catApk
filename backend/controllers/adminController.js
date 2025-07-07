import adminModel from "../models/adminModel";

export const register = async(req, res) => {
    const { name, email, password } = req.body;
    
    try{

        const newAdmin = new adminModel({ name, email, password });
        await newAdmin.save()


    }

    catch(err){
        return res.status(500).json({ message: err.message})
    }
}