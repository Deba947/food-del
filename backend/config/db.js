import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://mondaldebanjan471:Deba947@cluster0.tjvtbtq.mongodb.net/food-del').then(()=>console.log("DB Connnected"));
}