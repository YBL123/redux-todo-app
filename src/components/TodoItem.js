import React from 'react'
import './TodoItem.css'

const TodoItem = ({name, done, id}) => {
  return (
    <div className='todoItem'>
      <p className={done && 'todoItem--'}>{name}</p>
    </div>
  )
}

export default TodoItem
