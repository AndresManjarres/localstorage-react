import { TaskRow } from "./TaskRow"

export const TaskTable = ({ task, toggleTask, showCompleted = false }) => {

  const taskTableRows = (donevalue) => {
    return (
      task.filter(task => task.done === donevalue)
        .map(task => (
          <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
        ))
    )
  }
  return (
    <table className="table table-dark table-striped table bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRows(showCompleted)
        }
      </tbody>
    </table>
  )
}