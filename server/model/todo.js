const  mongoose  = require("mongoose");


const todoSchema= new mongoose.Schema({
    name: { type : String , required : true },
    age: { type : Number , required : true },
    description:{type:String,required : true}
})
const todomodel = mongoose.model('Todos',todoSchema);
module.exports = todomodel



// mongoose=require("mongoose");

// TodoSchema= New mongoose.Schema({
//     name:{
//         type: string,
//         require
//     },
//     age:{
//         type: number,
//         require
//     } ,
//     description:{
//         type: string,
//         require
//     }
// })
// const TodoSchema=mongoose.model("todos",TodoSchema)
// module.exports=Todoschema;


// mongoose=require("mongoose");

// const TodoSchema=new mongoose.Schema({
//     name:{
//         type:string,
//         required:true,
//     },
//     age:{
//         type:number,
//         required:true,
//     },
//     description:{
//         type:string,
//         required:true,
//     }
// })

// const TodoModel= mongoose.model("todos",TodoSchema);
// module.export= TodoModel




// mongoose=require("mongoose")
// const sechema= new mongoose.sechema()

// const mongoose=require("mongoose");

// const user= new mongoose.Schema({
//     name:{
//         type:String,
//         required: true,
//     },
//     age:{
//         type:Number,
//         required: true,
//     },
//     discription:{
//         type: String,
//         required: true,
//     }
// })

// const userModel= mongoose.model("todos",user)
// module.exports=userModel