import mongoose, { Schema } from "mongoose";



const appSchema = new Schema({
    name: {type: String, required: true},
    version: {type: String, required: true },
    description: {type: String, required: true},
    date:  { type: Date, default: Date.now },
    features: {type: [String], required: true},
    link: {type: String, required: true},
    imageUrl: {type: String, required: true}
});

const AppModel = mongoose.model('App', appSchema);
export default AppModel;