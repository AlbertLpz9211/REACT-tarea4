import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]); //estado para enviar como props hadia los componentes
  const [userSelectec, setUserSelected] =useState(null);

  
  //CLASE MINUNTO 1:51:53

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((resp) => setUsers(resp.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((resp) => setUsers(resp.data));
  };
  const selectedUser =(user) => {
    setUserSelected(user);
  };
  // const deselectedUser=()=> 
  
  return (
    <div className="App">
      <UsersForm getUsers={getUsers} selUser={userSelectec}/>
      <UsersList users={users} selectedUser={selectedUser} />
    </div>
  );
}

export default App;
