import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
  const [task, setTask] = useState()
  const handleAdd = () => {
    axios.post('http://localhost:3004/add', {task : task})
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))


  }
  return (
    <div className='create-form'>
      <input type='text'  placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}/>
      <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
