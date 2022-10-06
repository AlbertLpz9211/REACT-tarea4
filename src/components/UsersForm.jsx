import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({ getUsers, selUser }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (selUser) {
      reset(selUser);
    }
  }, [selUser]);

  const submit = (userRegister) => {
    console.log(selUser);
    if (selUser) {
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${userRegister.id}/`,
          userRegister
        )
        .then(() => getUsers());
    } else {
      alert("se esta registrando");
      axios
        .post("https://users-crud1.herokuapp.com/users/", userRegister)
        .then(() => getUsers())
        .catch((e) => console.log(e));
    }
    clearForm();
  };
  const clearForm = () => {
    reset({
      first_name: "",
      last_name: "",
      password: "",
      email: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <h1>Formulario de Registro</h1>
        <div className="input-container">
          <label htmlFor="first_name">first name</label>
          <input type="text" id="first_name" {...register("first_name")} />
        </div>
        <div className="input-container">
          <label htmlFor="last_name">last name</label>
          <input type="text" id="last_name" {...register("last_name")} />
        </div>
        <div className="input-container">
          <label htmlFor="password">password</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <div className="input-container">
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            placeholder="user@example.com"
            {...register("email")}
          />
        </div>
        <div className="input-container">
          <label htmlFor="birthday">birthday</label>
          <input type="date" id="birthday" {...register("birthday")} />
        </div>
        <button className="submit">Enviar</button>
        <button className="clean" onClick={clearForm}>
          Limpiar
        </button>
      </form>
    </div>
  );
};

export default UsersForm;
