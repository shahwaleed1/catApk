import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import multer from 'multer';
import path from 'path'
import dbconnection from './db/connection.js';
import AppModel from './models/publish.js';


dotenv.config();
const app = express();
const PORT = 5000 || 8000;
// const NAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;
const DBURL = process.env.DB_FULLURL;


app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))


dbconnection(DBURL);


const storage = multer.diskStorage({
    destination: (req, file, cb) => cd(null, 'uploads/'),
    filename: (req, file, cb) =>
        cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage })




app.get('/',(req, res)=>{
    return res.status(200).json('Hello word! 2025')
})

app.post('/api/publish',upload.single('image'), async(req, res)=>{

    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    try{
        const newApp = new AppModel({
            ...req.body,
            image: imageUrl
        });
        const savedApp = await newApp.save();


        res.status(200).json({
            message : 'App added in DB!',
            data: savedApp,
        })

    }
    catch(err){
        console.log('Error in Publish api :', err )
        res.status(500).json({err: 'network error occur publish '})
    }
})

app.get('/api/apps', async(req, res) =>{
    try{
        const apps = await AppModel.find();
        res.status(200).json(apps)
    }
    catch(err){
        console.log('Error in apps :', err )
        res.status(500).json({ error: err.message });
    }
})

app.get('/api/apps/:id', async (req, res) => {
    try{
        const app = await AppModel.findById(req.params.id)
        if(!app) return res.status(404).json({ message: 'not found!'})
        res.status(200).json(app)
    }
    catch(err){
        console.log(err)
    }
})



app.listen(PORT, ()=> console.log(`Server start on ${PORT}`))