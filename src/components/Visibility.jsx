
export const Visibility = ({ setShowCompleted, deleteTask, ischecked }) => {

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete the task?")) {
      deleteTask()
    }
  }
  return (

    <div className="d-flex justify-content-center align-items-center bg-secondary text-white text-center p-2 border-secondary mb-2">
      <div className="form-check form-switch d-flex align-items-center gap-2">
        <input
          className="form-check-input"
          type="checkbox"
          checked={ischecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label className="form-check-label">Show Task Done</label>
      </div>
      <button onClick={handleDelete} className="btn btn-danger ms-3" style={{ width: '70px', height: '39px' }}>Delete</button>
    </div>
  )
}