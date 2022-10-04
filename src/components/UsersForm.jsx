import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers, selUser}) => {

    const {register, handleSubmit, reset} =useForm();
    const defaultValuesForm ={};

    useEffect(() => {
        if (selUser) {
            alert("se selecciono una pelicula")
        }
      }, [selUser]);

    const submit =(data)=>{
         axios.post('https://users-crud1.herokuapp.com/users/', data)
         .then(()=>getUsers())
         .catch (e => console.log(e));
    }

        
    
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <h1>Users Form</h1>
                <div className="input-container">
                    <label htmlFor="first_name">first name</label>
                    <input type="text" id="first_name" {...register("first_name")} />
                </div>
                <div className="input-container">
                    <label htmlFor="last_name">last name</label>
                    <input type="text" id="last_name" {...register("last_name")}/>
                </div>
                <div className="input-container">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" {...register("password")}/>
                </div>
                <div className="input-container">
                    <label htmlFor="email">email</label>
                    <input type="text" id="email" placeholder='user@example.com' {...register("email")} />
                </div>
                <div className="input-container">
                    <label htmlFor="birthday">birthday</label>
                    <input type="date" id="birthday" {...register("birthday")}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UsersForm;