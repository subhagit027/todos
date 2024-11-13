import React, { useEffect, useState } from 'react'
import Create from './Create'

const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
      axiox.get('http://localhost:3004/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
    }, [])

  const handleEdit = (id) => {
    axiox.put('http://localhost:3004/update/'+id)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))
}

const handleDelete = (id) => {
  axiox.delete('http://localhost:3004/delete/'+id)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))

}

return (
    <div>
      <h2>Todo List</h2>
      <Create/>
      {
        todos.length === 0 ?
        <div><h2>No record</h2></div>
        :
        todos.map(todo => {
            <div className='task'>
              <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                {todo.done ? <BsFillCheckCircleFill className = 'icon'></BsFillCheckCircleFill>
                : <BsCircleFill className = 'icon'/>
                }
                <BsCircleFill className = 'icon'/>
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>

              </div>
            <div>
              <span><BsFillTrashFill className = 'icon' 
              onClick = {() => handleDelete(todo._id)}/>
              </span>
              </div>


            </div>
            
        })
      }
    </div>
  )
}

export default Home
