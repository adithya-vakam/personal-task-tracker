import React, { useState } from "react";

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.description);

  const toggleComplete = () =>
    onUpdate({ ...task, completed: !task.completed });

  const saveEdit = () => {
    onUpdate({ ...task, title, description: desc });
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.completed ? "completed" : "pending"}`}>
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={desc} onChange={(e) => setDesc(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <small>{new Date(task.createdAt).toLocaleString()}</small>
        </>
      )}
      <div>
        <button onClick={toggleComplete}>
          {task.completed ? "Mark Pending" : "Mark Complete"}
        </button>
        <button onClick={() => setIsEditing((v) => !v)}>Edit</button>
        <button onClick={() => window.confirm("Delete?") && onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
