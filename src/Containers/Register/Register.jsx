import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


const Register = () => {

    let history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    //Manejadores o Handlers

    const userHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    //useEffect

    useEffect(() => {
        //UseEffect que se ejecuta sólo una vez al montarse. (1a vez).

    }, []);

    useEffect(() => {
        //UseEffect que se ejecutará CADA VEZ que se actualize el estado.(renderizando de nuevo).
    });

    //Funciones

    const enviaDatosRegistro = async () => {
        //Comprobación de errores en los datos

        if (! /[a-z]/gi.test(user.name) ) {
           setmsgError("Nombre Incorrecto");
           return;
        };
        
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(user.email) ) {
           setmsgError("Email Incorrecto");
           return;
        };

        //Generación del body
        let body = {
            name: user.name,
            email: user.email,
            password: user.password,
            telf: user.telf,
        }

        //Conexion a axios y envio de datos
        console.log("ENVIANDO AL BACKEND ESTO....",body);
        
        
        try {
            let res = await axios.post("https://app-movies-mongoose.herokuapp.com/api/signup", body);
            console.log("imprimir res: ",res)
            //Guardado de datos en localStorage
            localStorage.setItem("datosLogin", JSON.stringify(res.data.user));
            setmsgError("Usuario registrado con éxito");
     
            history("/login");
    
            
        } catch (error) {
            console.log(error)
        }
        

        

       
    };


    //Renderizado
    return (
        <div className="designRegister">
            <div id="container-form">
                {/*<pre>{JSON.stringify(user, null, 2)}</pre>*/}
                <h1>Registrate</h1>
                <input className="input-form-register" type='text' name='name' title='name' onChange={userHandler} lenght='30' placeholder='Nombre' />
                <input className="input-form-register" type='email' name='email' title='email' onChange={userHandler} lenght='30' placeholder='Email' />
                <input className="input-form-register" type='text' name='telf' title='telf' onChange={userHandler} lenght='30' placeholder='Teléfono' />
                <input className="input-form-register" type='text' name='password' title='password' onChange={userHandler} lenght='30' placeholder='Password' />
            
                <div className="sendButton" onClick={() => enviaDatosRegistro()}>Registrame</div>
            </div>
            <div>{msgError}</div>
        </div>
    )
};

export default Register;