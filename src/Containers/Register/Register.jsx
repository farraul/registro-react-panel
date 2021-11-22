import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


const Register = () => {

    let history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");

    const [inputs_data_form, setinputs_data_form] = useState({
        name: '',
        email: '',
        telf:'',
        password: '',
    });

    const [user, setUser] = useState({
        name: '',
        email: '',
        telf:'',
        password: '',
    });

    //Manejadores o Handlers
    const userHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const change_name = ()=>{
      
        console.log("length de user: ",user.name.length)
        if(user.name.length>=3){ // && (/^[a-z]/gi.test(user.name))  no funciona el filtro de letras
           setinputs_data_form({
            ...inputs_data_form,
            name:"✓ Nombre"});
            console.log("entra1");

        }else{
            setinputs_data_form({
            ...inputs_data_form,
            name:"✗ Utiliza solo letras y minimo 4 caracteres"});
            console.log("entra2");
     
        };
    }

    const change_email = ()=>{
        if( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(user.email)) {
            setinputs_data_form({
                ...inputs_data_form,
                email:"✓ Email"});
         }
         else{
     

        setinputs_data_form({
            ...inputs_data_form,
            email:"✗ Email incorrecto"});
         console.log("else 2:",inputs_data_form.email);
        };
    }
    




    //useEffect

    useEffect(() => {
        console.log("inputs_data_form:",inputs_data_form)

    }, []);

    useEffect(() => {
        console.log("user: ",user)
        console.log("inputs_data_form:",inputs_data_form)
    });

    //Funciones

    const enviaDatosRegistro = async () => {

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
                <div className="container-form-2fields">
                    <div className="input-form-register-fields">
                        <input className="input-form-register" type='text' name='name' title='name' onChange={e =>{userHandler(e); change_name()}} lenght='30' placeholder='Nombre' />
                        <div className="div-print-info-correct">{inputs_data_form.name}</div>
                        <input className="input-form-register" type='email' name='email' title='email' onChange={e =>{userHandler(e); change_email()}} lenght='30' placeholder='Email' />
                        <div className="div-print-info-correct">{inputs_data_form.email}</div>
                        <input className="input-form-register" type='text' name='telf' title='telf' onChange={userHandler} lenght='30' placeholder='Teléfono' />
                        <div className="div-print-info-correct">{inputs_data_form.telf}</div>
                        <input className="input-form-register" type='text' name='password' title='password' onChange={userHandler} lenght='30' placeholder='Password' />
                        <div className="div-print-info-correct">{inputs_data_form.password}</div> 
                    </div>
                    
                </div>
                <div className="sendButton" onClick={() => enviaDatosRegistro()}>Registrame</div>


            </div>

        </div>
    )
};

export default Register;