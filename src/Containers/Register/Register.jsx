import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {

    let history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [user, setUser] = useState({
        name: '',
        surname: '',
        dni: '',
        email: '',
        address: '',
        city: '',
        cp: 0,
        password: '',
        password2: '',
        phone: ''
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
        }

        //Conexion a axios y envio de datos
        console.log("ENVIANDO AL BACKEND ESTO....",body);
        
        
        try {
            let res = await axios.post("https://app-movies-mongoose.herokuapp.com/api/signup", body);
            //Guardado de datos en localStorage
            
        } catch (error) {
            console.log(error)
        }
        

        

        setmsgError("Usuario registrado con éxito");
        
        setTimeout(()=>{
            history("/");
        },4000);
    };


    //Renderizado
    return (
        <div className="designRegister">
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <input type='text' name='name' title='name' onChange={userHandler} lenght='30' placeholder='Nombre' />
            <input type='email' name='email' title='email' onChange={userHandler} lenght='30' placeholder='Email' />
            <input type='text' name='password' title='password' onChange={userHandler} lenght='30' placeholder='Password' />
          
            <div className="botonSend" onClick={() => enviaDatosRegistro()}>Registrame</div>
            <div>{msgError}</div>
        </div>
    )
};

export default Register;