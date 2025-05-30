import mongoose from "mongoose";
import { DB_NAME } from "../Constant.js";


const ConnectDB = async () => {
    try{
        const ConnectionIntsance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`/n MongoDB connected !! DB HOST: ${ConnectionIntsance.connection.host}`)
}catch(error){
    console.log('MonoDB Connection Failed', error)
    process.exit(1)
    
}
}


export default ConnectDB