import { Todo } from "../Models/todo.models.js";



//add todo 
const createTodo = async (req,res) => {
    try{
        const {title} = req.body
        const newtodo =  new Todo({title});
        await newtodo.save();
        res.status(201).json(newtodo)
    }catch(err){
        res.status(500).json({message : "Failed to create todo"})
    }
}

// get todo
const getTodo = async (req,res) => {
    try{
        const todos = await Todo.find();
        res.status(200).json(todos)
    }catch(error){
        res.status(500).json({
            message : "Failed todo fetch "
        })
    }
}

// edit Todo 
const editTodo = async (req,res) => {
    try{
       const {id} = req.params;
        const {title} = req.body;

        const existingTodo = await Todo.findById(id);
        if(!existingTodo){
           return  res.status(404).json({
            message : "Todo not found"
           })
        }

        existingTodo.title = title;
        const updateTodo = await existingTodo.save()

        res.status(200).json(updateTodo)
    }catch(error){
        res.status(500).json({
            message : "Edit Todo Failed"
        })
    }
}

//delte todo 
const deleteTodo = async (req,res) => {
    try{
        const {id} = req.params;
        const deleteTodo   = await Todo.findByIdAndDelete(id)
        if(!deleteTodo){
          return  res.status(404).json({
            message : "Todo not found"

          })
        }
        res.status(200).json({
            message : "Todo delete Successfully",
            deleteTodo
        })
    }catch(error){
        res.status(500).json({
            message : "Failed to delete todo"
        })
    }
}

const deleteAll = async (req, res) => {
    try{
      const allDelete = await Todo.deleteMany({})
      res.status(200).json({
        message : "ALL Todo Delelte Successfully",
        deletedCount : allDelete.deletedCount,
      })
    }catch(error){
        res.status(500).json({
            message : "All Todo Delete Failed"
        })
    }
    
} 


 export {createTodo,getTodo,editTodo,deleteTodo,deleteAll}
