import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import TaskList from "./components/TaskList";

function App() {
  const [user, setUser] = useState(localStorage.getItem("username"));

  const handleLogin = (username) => {
    localStorage.setItem("username", username);
    setUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUser(null);
  };

  return (
    <div className="container">
      <h1>Personal Task Tracker</h1>
      {user ? (
        <>
          <button className="logout" onClick={handleLogout}>Logout</button>
          <TaskList username={user} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
