
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
            {datosPerfil.createdAt}
            <br/>
            {datosPerfil.email}
            <br/>
            {datosPerfil.password}
            <br/>
            {datosPerfil.updatedAt}
        </div>
    )
};

export default Profile;

