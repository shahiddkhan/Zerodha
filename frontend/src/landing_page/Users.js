import React, { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../api";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
