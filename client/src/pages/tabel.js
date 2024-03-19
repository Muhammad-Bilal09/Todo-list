import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Tabel() {

  const [documents,setDocuments]=useState([])  

const deleteData =(todo)=>{
  console.log('todo for delete', todo)
  axios.post('http://localhost:8000/deleteTodo',todo)
  .then((res) =>{
    if(res.data  === "todo deleted"){
      setDocuments(documents.filter((doc)=> doc._id !== doc._id))
    }
    console.log('res', res)
  })
  .catch((err) =>{
    console.log('err', err)
  })
}
const updateData =(todo)=>{
  // console.log('todo for edit', todo)
  axios.post('http://localhost:8000/updateTodo', todo)
  .then((res) =>{
  console.log('res', res)
    })
    .catch((err) =>{
  console.log('err', err)
  })
}
  useEffect(()=>{
    axios.get('http://localhost:8000/readtodo')
    .then((req) =>{
        const {data} =req 
        setDocuments(data)
    })
    .catch((err) =>{
      console.log('err', err)
    })
  })
  return (
    <> 
    <div className="container mt-5 bg-light">
      <div className="row">
        <h2 className='text-center'>Todos List</h2>
      <table className="table-responsive text-center">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task Name</th>
      <th scope="col">task duration</th>
      <th scope="col">Task description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {documents.map((todo,i)=>{
      return(
        <tr key={i}>
        <th scope="row">{i+1}</th>
        <td>{todo.name}</td>
        <td>{todo.age}</td>
        <td>{todo.description}</td>
        <td><button className='btn btn-success btn-sm me-2'  onClick={()=>updateData(todo)}>Update</button>
        <button className='btn btn-danger btn-sm'  onClick={()=>deleteData(todo)}>Delete</button></td>
      </tr>
      )
    })}

  </tbody>
</table>
      </div>
    </div>
    </>
  )
  }