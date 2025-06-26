import mongoose, { Schema } from "mongoose";



const appSchema = new Schema({
    name: {type: String, require: true},
    version: {type: String, require: true },
    description: {type: String, require: true},
    features: {type: [String], require: true},
    link: {type: String, require: true},
    image: {type: String, require: true},
    createdAt: { type: Date, default: Date.now }
});

const AppModel = mongoose.model('App', appSchema);
export default AppModel;