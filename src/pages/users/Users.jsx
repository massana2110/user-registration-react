import React, {useEffect, useState} from 'react'
import './users.css'
import axios from "axios";
import {Link} from "react-router-dom";

export const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const result = fetchUsers()

        result.then((res) => {
            setUsers(res)
        })
    }, []);

    const fetchUsers = async () => {
        const result = await axios.get('https://monkfish-app-fxij9.ondigitalocean.app/api/users')
        return result.data
    }

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.userName} - {user.userAge} años - {user.userEmail}
                    </li>
                ))}
            </ul>
            <Link className="nav-link" to="/">Volver al inicio</Link>
        </div>
    )
}