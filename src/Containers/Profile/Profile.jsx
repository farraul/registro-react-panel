
import React, {useState, useEffect} from 'react';

import './Profile.css';

const Profile = () => {

    //Hook 
    const [datosPerfil, setDatosPerfil] = useState(JSON.parse(localStorage.getItem("datosLogin")));
    

    useEffect(()=>{
        console.log(datosPerfil) //ese se hace la primera vez que carga el componente
    },[])

    return (
        <div className="designProfile">
            <div id="table-profile">
                <div className="table-row">
                    <div className="table-field-1">Nombre:</div>
                    <div>{datosPerfil.name}</div>
                </div>
                <br/>
                <div className="table-row">
                    <div className="table-field-1">Email:</div>
                    <div>{datosPerfil.email}</div>
                </div>
                <br/>
                <div className="table-row">
                    <div className="table-field-1">Teléfono:</div>
                    <div>{datosPerfil.telf}</div>
                </div>
                <br/>
            
            </div>
        </div>
    )
};

export default Profile;

