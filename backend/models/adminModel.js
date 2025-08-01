import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type : String, required: true , unique: true},
    password: { type: String, required: true },
    image: { type: String },
    createAt: { type: Date, default: Date.now }
});


const adminModel = mongoose.model("admin", adminSchema);
export default adminModel;