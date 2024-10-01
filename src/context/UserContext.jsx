import React from 'react'
import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
const [user, setUser] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

async function handleRegister(email, password) {
    const registrar = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
    email,
    password,
    }),
    });
    const dataRegistro = await registrar.json();
    console.log(dataRegistro)
    if(dataRegistro && dataRegistro.token){
        alert(`Usuario ${dataRegistro.email} Registrado`)
        setEmail(dataRegistro.email)
        setUser(dataRegistro.token)
      }else{
        alert(dataRegistro.error)}
      }


const handleLogin = async (e) => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        email,
        password,
        }),
        });
        const data = await response.json();
        alert(data?.error || "Autenticación exitosa");
        localStorage.setItem("token", data.token);

        setUser(true);
        };


const logout = () => {
    setUser("")
    setEmail("")
    setPassword("")
};

return (
<UserContext.Provider value={{ user, setUser, logout, handleLogin, setEmail, setPassword, handleRegister }}>
{children}
</UserContext.Provider>
);
};
export default UserProvider;
