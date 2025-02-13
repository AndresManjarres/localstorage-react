import { useState } from 'react'

//Se puede destructurar el props para obtener la funcion directamente {createNewTask}
export const TaskCreator = (props) => {

  //console.log(props)
  //Antes de que se renderice el componente

  const [newTaskName, setNewTaskName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName);
    //localStorage.setItem('task', newTaskName);
    setNewTaskName("");
  }

  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
      <div className='col-9'>
        <input
          type="text"
          placeholder='Add a new task'
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className='form-control '
        />
      </div>
      <div className='col-3'>
        <button className='btn btn-primary btn-sm' style={{ width: '70px', height: '39px' }} >Save</button>
      </div>
    </form>
  )
}