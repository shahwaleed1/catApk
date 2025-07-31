import express from 'express'
import adminModel from '../models/adminModel.js';
import mongoose from 'mongoose';


const adminsRoutes = express.Router()



adminsRoutes.get('/', async(req, res) => {
    try{
        const admins = await adminModel.find()
        res.status(200).json(admins)
    }
    catch(err){
        console.log('Error in admims getting Data : ', err);
        res.status(500).json({ error: err.message })
    }
})


adminsRoutes.delete('/', async (req, res) => {
    const { id } = req.params;
    try {
        const admin = await adminModel.findByIdAndDelete(id);
        return res.status(204).json({ message: admin });
    }
    catch(err){
        console.log('Error in admin delete : ', err)
        return res.status(500).json({ error: err.message })
    }
})


export default adminsRoutes;