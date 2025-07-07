export const getTasksFromStorage = (username) => {
  const data = localStorage.getItem(`tasks_${username}`);
  return data ? JSON.parse(data) : [];
};

export const saveTasksToStorage = (username, tasks) => {
  localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
};
