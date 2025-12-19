import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
})


const Productmodel = mongoose.model("Product", ProductSchema)

export default Productmodel;

