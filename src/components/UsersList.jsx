import React from "react";

const UsersList = ({ users }) => {
  return (
    <div>
      <h1>Users List</h1>
      <ul className="users-list">
        {users.map((user) => (
          <>
            <div>
              <li key={user.id}></li>
              <h1>{user.first_name} {user.last_name}</h1>
            </div>
            <div>
              <li>{user.email}</li>
            </div>
            <div>
              <li>{user.birthday}</li>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
