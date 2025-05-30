import express from 'express'
import {createTodo,getTodo,editTodo,deleteTodo, deleteAll} from "../Controllers/todoControllers.js"

const todoRouter = express.Router()

todoRouter.post('/add', createTodo)
todoRouter.get('/get', getTodo)
todoRouter.put('/edit/:id',editTodo)
todoRouter.delete('/delete/:id',deleteTodo)
todoRouter.delete('/deleteAll',deleteAll)



export {todoRouter}