import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";
import { getTasksFromStorage, saveTasksToStorage } from "../utils/localStorage";

const TaskList = ({ username }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = getTasksFromStorage(username);
    if (saved) setTasks(saved);
  }, [username]);

  useEffect(() => {
    saveTasksToStorage(username, tasks);
  }, [tasks, username]);

  const addTask = (task) => setTasks([task, ...tasks]);

  const deleteTask = (id) =>
    setTasks(tasks.filter((task) => task.id !== id));

  const updateTask = (updated) =>
    setTasks(tasks.map((task) => (task.id === updated.id ? updated : task)));

  const filtered = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <>
      <TaskForm onAdd={addTask} />
      <TaskFilter current={filter} setFilter={setFilter} tasks={tasks} />
      {filtered.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={deleteTask}
          onUpdate={updateTask}
        />
      ))}
    </>
  );
};

export default TaskList;
