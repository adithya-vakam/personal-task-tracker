import React from "react";

const TaskFilter = ({ current, setFilter, tasks }) => {
  const counts = {
    all: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    pending: tasks.filter((t) => !t.completed).length,
  };

  return (
    <div className="filters">
      {["all", "completed", "pending"].map((type) => (
        <button
          key={type}
          className={current === type ? "active" : ""}
          onClick={() => setFilter(type)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)} ({counts[type]})
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
