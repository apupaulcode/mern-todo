import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
    const [task,setTask]=useState()
    const handleAdd=()=>{
        if(task.length !== 0){
        axios.post('http://localhost:3001/add',{task:task})
        .then(result => console.log(result))
        .catch(err=>console.log(err));
        setTask('')
        }
    }
  return (
    <div>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
      <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
