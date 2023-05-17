import React from "react"
import api from "../api"
import { ReactDOM } from 'react-dom/client';


const Users = () =>{
    console.log(api.users.fetchAll());
    return <h1>Users</h1>
};



export default Users
