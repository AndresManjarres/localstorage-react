export const TaskRow = ({ task, toggleTask }) => {

  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
          className="form-check-input me-1"
        />
      </td>
    </tr>
  )

}