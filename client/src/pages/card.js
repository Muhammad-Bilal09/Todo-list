import React, { useEffect, useState } from 'react'
import axios from 'axios'

const intailvalue={
    name:'',age:'',description:''
}
export default function Card() {

  const [state,setState]=useState(intailvalue)
const {name,age,description}=state
  let todo={
    name,age,description
}  
  const handelChange=(e)=>{
    const {name,value}=e.target
    setState({...state,[name]:value})
  }
  const handelSubmit= (e) => {
e.preventDefault();
console.log(state)

axios.post('http://localhost:8000/createTodo', todo)
.then((res) =>{
console.log('res', res)
  })
  .catch((err) =>{
console.log('err', err)
})
  }
  useEffect(()=>{
    axios.get('http://localhost:8000/readTodo')
    .then((res) =>{
      console.log('res', res)
    })
    .catch((err) =>{
      console.log('err', err)
    })
  })
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="card p-2 w-50 mt-5">
                    <h2 className='text-center'>Add Tasks</h2>
                    <div className="row">
                        <form onSubmit={handelSubmit}>
                        <div className="col">
                            <input type="text" name='name' placeholder='enter your task name' className='mt-3 form-control' onChange={handelChange} />
                        </div>
                        <div className="col">
                            <input type="number" name='age' placeholder='enter duration for completed task' className='mt-2 form-control' onChange={handelChange} />
                        </div>
                        <div className="col">
                            <textarea name="description" placeholder='enter task description' className='mt-2 form-control ' onChange={handelChange}></textarea>
                        </div>
                        <div className="col">
                            <button className='btn btn-success form-control mt-2'>submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
  }