
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Login.css';


const Login = () => {

    const history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ correo: '', clave: '' });

    //Handler o manejador
    const manejadorInputs = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        /*console.log("e.target.name::: ", e.target.name)
        console.log("e.target.value::: ", e.target.value)*/
        console.log("credentials: ", credentials)
    }

    const logeame = async () => {

        let body = {
            email: credentials.correo,
            password: credentials.clave
        };

        try {

            let res = await axios.post("https://app-movies-mongoose.herokuapp.com/api/signin", body);
            setmsgError(`Hola de nuevo ${res.data.Usuario.email}....`);
            console.log("imprimir ", res);
            localStorage.setItem("datosLogin", JSON.stringify(res.data.Usuario));

            setTimeout(() => {
                history("/profile");
            }, 1000);
        } catch (error) {
            setmsgError("Error al logearmeee");
          

        }

    }


    return (

        <div className="designLogin">
            <div id="style-div-form-login">
                {/*<pre>{JSON.stringify(credentials, null,2)}</pre>*/}
                <input class="style-form-login" type='email' name='correo' title='correo' onChange={manejadorInputs} lenght='30' placeholder="Email" />
                <input class="style-form-login" type='password' name='clave' title='clave' onChange={manejadorInputs} lenght='30' placeholder="Contraseña" />
                <div className="sendButton" onClick={() => logeame()}>Login</div>
                <div className="error">{msgError}</div>
            </div>
        </div>
    )
};

export default Login;