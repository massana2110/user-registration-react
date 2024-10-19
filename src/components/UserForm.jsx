import { useState } from "react";
import { Link } from "react-router-dom";
import {UserFormInput} from "./UserFormInput.jsx";
import axios from "axios";

export const UserForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const result = await axios.post(
            "https://monkfish-app-fxij9.ondigitalocean.app/api/users",
            {
                userName: name,
                userEmail: email,
                userAge: age,
            })

        if (result.status === 201) {
            alert(result.data.message)
        } else if (result.status >= 400) {
            alert(result.data.error);
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <ul>
                    <li>
                        <h1>Formulario</h1>
                    </li>
                    <li>
                        <UserFormInput
                            value={name}
                            label={'Nombre:'}
                            name={'user_name'}
                            type={'text'}
                            onChange={e => setName(e.target.value)}
                        />
                    </li>
                    <li>
                        <UserFormInput
                            label={'Edad:'}
                            name={'user_age'}
                            type={'number'}
                            value={age}
                            onChange={e => setAge(e.target.value)}
                        />
                    </li>
                    <li>
                        <UserFormInput
                            label={'Correo electrónico:'}
                            name={'user_email'}
                            type={'email'}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </li>
                    <li>
                        <input type="submit" value="Registrar"/>
                    </li>
                </ul>
            </form>
            <br/>
            <Link className="nav-link" to="/users">Ver usuarios registrados</Link>
        </>

    )
}