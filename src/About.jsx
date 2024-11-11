// src/About.jsx
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function About() {
  // State to store fetched data
  const [users, setUsers] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>About Page</h2>
      <p>
        This is the about page where we display user information fetched from an
        API.
      </p>

      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              <strong>{user.name}</strong>
            </Link>{" "}
            - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
