import React from 'react';
import { useForm } from 'react-hook-form';

const UserList = () => {
    const {register, handleSubmit} =useForm();
    const submit =(data)=>{
        //funcion para submit con handle
         console.log(data);
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
                    <input type="text" id="password" {...register("password")}/>
                </div>
                <div className="input-container">
                    <label htmlFor="email">email</label>
                    <input type="text" id="email" placeholder='user@example.com' {...register("email")} />
                </div>
                <div className="input-container">
                    <label htmlFor="birthday">birthday</label>
                    <input type="date" id="birthday" {...register("birthday")}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserList;