import React from "react";


const UsersList = ({ users, selectedUser }) => {

  return (
    <div>
      <h1>Users List</h1>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id}>
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <div>{user.email}</div>
            <div>{user.birthday}</div>
            <br />
            <button onClick={()=>selectedUser(user)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
