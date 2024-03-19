const express= require("express");
const app = express();
const cors =require("cors")
const mongoose=require("mongoose")
// let mongo_url= "mongodb+srv://muhammadbilal0729:password1234@cluster0.ohoogxq.mongodb.net/todo?retryWrites=true&w=majority"
let mongo_url="mongodb+srv://bilal:password12345678@cluster0.72v7xtv.mongodb.net/"
mongoose.connect(mongo_url)
app.use(cors())
const todomodel = require("./model/todo")
app.use(express.json())




let port= 8000;
app.listen(port,()=>{
console.log('app succesfuly running on port', port)
})

app.post('/createTodo',async(req,res)=>{
const todo= req.body
const newtodo =new todomodel(todo)
await newtodo.save()
res.json("succesfully created")
})


app.get('/readTodo',async(req,res)=>{
    // const todos=req.body
    let todos= await todomodel.find()
    res.send(todos)
})

app.post("/updateTodo",async(req,res)=>{
    const todo=req.body
    await todomodel.findByIdAndUpdate(todo._id, { name: 'updated name'})
res.send("update todo")
})
app.post("/deleteTodo",async(req,res)=>{
    const todo=req.body
       await todomodel.findByIdAndDelete(todo._id)
res.send("todo deleted")
})






// app.get("/deletetodo",async(req,res)=>{

// const todo= req.body
    // await todomodel.findById(todo._id)
// res.send("todo deleted")
// })
//     app.post("/updatetodo",(req,res)=>{
//         // const id=req.query.id
//         // const data={title:req.body.title}
//         // console.log(id);
//         // todomodel.updateOne({_id:id},{$set:{title:req.body.title}}, function (err){
//         //     if(!err){
//         //         res.send("Data updated successfully!");
//         //     }
//         //     else{
//         //         console.log(err);
//         //     }
//         // })
//         const todo= req.body
//         Model.findByIdAndUpdate(todo._id, { name: 'updated name' }, options)
//         res.send("todo updated")

//         })