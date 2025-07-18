import express from 'express'
import adminModel from '../models/adminModel.js';


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


export default adminsRoutes;