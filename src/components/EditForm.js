import React, {useState} from 'react'


const EditForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
       e.preventDefault();
       editTodo(value, task.id)

    }
      return (
    <div> 
       <form onSubmit={handleSubmit} className='TodoForm'>
        <input type="text" value={value} onChange={(e)=> setValue(e.target.value)}
        className='todo-input' />
        <button type='submit' className='todo-btn'>Add Task</button>
        </form>
   </div>
  )
}

export default EditForm