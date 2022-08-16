import React from "react";
import { useSelector } from "react-redux";

export default function App() {
  const userList = useSelector((state) => state);

  return (
    <div className="App">
      {console.log(userList.users.value)}
      <div className="addUser">
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="Username..." />
        <button>Add User</button>
      </div>

      <div className="displayUsers"></div>
    </div>
  );
}
