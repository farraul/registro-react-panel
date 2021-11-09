
import React, { useState, useEffect } from 'react';
import axios from 'axios';




const Profile = () => {

    {/*imprimir datos personales*/}
    //Hook 
    const [datosPerfil, setDatosPerfil] = useState(JSON.parse(localStorage.getItem("datosLogin")));

    useEffect(() => {
        console.log("datos perfil",datosPerfil) //ese se hace la primera vez que carga el componente
    }, [])


    {/*modificar datos*/}
    //Hooks
    const [msgError, setmsgError] = useState("");
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        telf: ''
    });
    const userHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    {/*función actualizar usuario*/}
    const update = async () => {
        //Generación del body
        let body = {
            id: user.id,
            name: user.name,
            email: user.email,
            telf: user.telf,
        }
        //Conexion a axios y envio de datos
        console.log("ENVIANDO AL BACKEND ESTO....",body);
        
        try {
            let res = await axios.put(`https://app-movies-mongoose.herokuapp.com/usuario/${datosPerfil._id}`, body);
            //Guardado de datos en localStorage
            console.log("dentro del try", res);
            
        } catch (error) {

            console.log("error de front", error);
        }
    }
    {/*función borrar un usuario*/}
    const deleteuser = async () =>{
        let body = {
            id: user.id,
        }
            //Conexion a axios y envio de datos
            console.log("ENVIANDO AL BACKEND ESTO....",body);
        
            try {
                let res = await axios.delete(`https://app-movies-mongoose.herokuapp.com/usuario/${datosPerfil._id}`, body);
                //Guardado de datos en localStorage
                console.log("dentro del try", res);
                localStorage.removeItem("datosLogin");
                setDatosPerfil({
                    id: '',
                    name: '',
                    email: '',
                    telf: ''
                });
                
            } catch (error) {
    
                console.log("error de front", error);
            }
    }

   {/* //función borrar  todos los usuarios
    const deletealluser = async () =>{
         try {
             let res = await axios.delete(`https://app-movies-mongoose.herokuapp.com/usuario/`);
             //Guardado de datos en localStorage
             console.log("dentro del try", res);
             
         } catch (error) {
 
             console.log("error de front", error);
         }
}
 */}


    return (
        <div className="designProfile">{/* no hay datos*/} 
           {!datosPerfil
                ? <div id="table-profile">
                <h1>Datos personales</h1>
                <div className="table-row">
                    <div className="table-field-1">Nombre:</div>
                    <div>{' '}</div> {/*igual que el de abajo, el "?" es el if, el ":" es un else, si hay algo dentro imprime sino lo otro (condicional ternario)  */}
                </div>
                <br />
                <div className="table-row">
                    <div className="table-field-1">Email:</div>
                    <div>{' '}</div>
                </div>
                <br />
                <div className="table-row">
                    <div className="table-field-1">Teléfono:</div>
                    <div>{' '}</div>
                </div>
                <br />
                <div className="table-row">
                    <div className="table-field-1">Id:</div>
                    <div>{' '}</div>
                </div>
            </div>

           :  
            <div id="table-profile">
                <h1>Datos personales</h1>
                <div className="table-row">
                    <div className="table-field-1">Nombre:</div>
                    <div>{datosPerfil.name ? datosPerfil.name : ' '}</div> {/*igual que el de abajo, el "?" es el if, el ":" es un else, si hay algo dentro imprime sino lo otro (condicional ternario)  */}
                </div>
                <br />
                <div className="table-row">
                    <div className="table-field-1">Email:</div>
                    <div>{datosPerfil.email}</div>
                </div>
                <br />
                <div className="table-row">
                    <div className="table-field-1">Teléfono:</div>
                    <div>{datosPerfil.telf}</div>
                </div>
                <br />
                <div className="table-row">
                    <div className="table-field-1">Id:</div>
                    <div>{datosPerfil._id}</div>
                </div>
            </div>

            }
   

            {/*Parte de actualizar */}
            <div id="container-update-profile">

                {/*<pre>{JSON.stringify(user, null, 2)}</pre>*/}
                <div id="table-update">
                    <h1>Actualizar</h1>
                    <input className="input-form-update" type='text' name='name' title='name' onChange={userHandler} lenght='30' placeholder='Nombre' />
                    <br />
                    <input className="input-form-update" type='email' name='email' title='email' onChange={userHandler} lenght='30' placeholder='Email' />
                    <br />
                    <input className="input-form-update" type='text' name='telf' title='telf' onChange={userHandler} lenght='30' placeholder='Teléfono' />
                    <br/>
                    <div className="sendButton" onClick={() => update()}>Actualizar datos</div>
                    <div className="deleteButton" onClick={() => deleteuser()}>Borrar usuario</div>
                   {/* <div className="deleteButton" onClick={() => deletealluser()}>Borrar todos usuario db</div> */}
                </div>
            </div>
        </div>


    )
};

export default Profile;

