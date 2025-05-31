import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from './DB/index.js'
import cors from "cors"
import {todoRouter}  from "./Routes/todoRoutes.js"

dotenv.config({
    path : './.env'
})
const PORT = process.env.PORT || 3000



const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));


app.use('/api/todos', todoRouter)


app.get('/', (req,res) => {
    res.send("Home")
})

ConnectDB()
.then(() => {
app.listen(process.env.PORT , () => {
    console.log("Server is Running ",PORT);
    
})
}).catch((error) => {
    console.log("MongoDB connection failed in index file",error);
    
})




