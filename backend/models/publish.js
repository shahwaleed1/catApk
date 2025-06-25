import mongoose, { Schema } from "mongoose";



const appSchema = new Schema({
    name: {type: String, require: true},
    version: {type: String, require: true },
    description: {type: String, require: true},
    date:  { type: Date, default: Date.now },
    features: {type: [String], require: true},
    link: {type: String, require: true},
    imageUrl: {type: String, require: true}
});

const AppModel = mongoose.model('App', appSchema);
export default AppModel;