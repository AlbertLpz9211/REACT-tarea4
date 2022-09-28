import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";



function App() {
  const [users,setUsers]=useState([]);

  useEffect (()=>{
    axios.get('https://users-crud1.herokuapp.com/users/').then(resp=>setUsers(resp.data));
  },[]);

console.log(users);
  return (
    <div className="App">
      <UsersForm />
      <UsersList users={users} />
    </div>
  );
}

export default App;
