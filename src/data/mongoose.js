import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log("database connected");
    }
    catch(e){  
        console.log("mongo db error",e);
    }
}



