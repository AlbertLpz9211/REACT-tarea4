import axios from "axios";
import React from "react";


const UsersList = ({ users, selectedUser, getUsers }) => {
const deleteUser =(id)=>{
  axios. delete(`https://users-crud1.herokuapp.com/users/${id}`)
  .then(()=> getUsers());
}

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id}>
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <div>{user.email}</div>
            <div>{user.birthday}</div>
            <br />
            <button className="edited" onClick={()=>selectedUser(user)}>Editar</button>
            <button className="deleted" onClick={()=> deleteUser(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
