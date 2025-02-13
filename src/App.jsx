import './App.css'
import { useState, useEffect } from 'react'
import { TaskCreator } from "./components/TaskCreator"
import { TaskTable } from "./components/TaskTable"
import { Visibility } from './components/Visibility'

function App() {

  const [taskItems, setTaskItem] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  //funcion para crear una tarea
  //taskName es el parametro que se recibe de TaskCreator
  function createTask(taskName) {

    if (!taskItems.find(task => task.name === taskName)) {
      setTaskItem([...taskItems, { name: taskName, done: false }])
    } else {
      alert("Task already exist")
    }

  }
  //Funcioin para cambiar el estado de la tarea
  //Aqui se crea un nuevo arreglo con el estado de la tarea
  const toggleTask = task => {

    setTaskItem(
      taskItems.map(t => t.name === task.name ? { ...t, done: !t.done } : t)
    );
  }

  //captura lo que este guardado en localStorage y mostrarlo en la tabla
  useEffect(() => {
    let data = localStorage.getItem('task')

    if (data) {
      setTaskItem(JSON.parse(data));
    }

  }, [])

  //Para eliminar una tarea
  const deleteTask = () => {
    setTaskItem(taskItems.filter(task => !task.done));
    setShowCompleted(false);
  }

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <main className="bg-dark vh-100 text-white">

      <div className="container col-md-4 offset-md-4 p-4">

        {/*Aqui se manda una funcion al componente TaskCreatos como props*/}
        <TaskCreator createNewTask={createTask} />
        <TaskTable task={taskItems} toggleTask={toggleTask} />
        <Visibility
          ischecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)} deleteTask={deleteTask} />
        {
          //Forma corta de un if y validar que es true
          showCompleted && (
            <TaskTable task={taskItems} toggleTask={toggleTask} showCompleted={showCompleted} />
          )
        }
      </div>
    </main>
  );
}

export default App
