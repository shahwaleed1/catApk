import mongoose from "mongoose";


const dbconnection = async(DBURL) =>{
    // const URL = `mongodb+srv://${NAME}:${PASSWORD}@catmodded.b179cvz.mongodb.net/?retryWrites=true&w=majority&appName=catModded`;

    const URL = DBURL
    try{
        await mongoose.connect(URL,{
            ssl: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("DB Connection Success!");
    }
    catch(err){
        console.log('Error in DB connection :', err);
    }
}

export default dbconnection;