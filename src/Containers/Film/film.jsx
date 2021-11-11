
import { getDefaultNormalizer } from '@testing-library/dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';



const Film = (props) => {
    const [peli, setPeli] = useState(JSON.parse(localStorage.getItem("choosenFilm")));

    useEffect(() => {
        console.log("props.data_user?.user?.name:  ",props.data_user.user.name);

        console.log(peli);
    }, []);


    const [token, setoken] = useState(JSON.parse(localStorage.getItem("token")));
    const [infouser, seinfouser] = useState(JSON.parse(localStorage.getItem("datosLogin")));
    console.log("info user: ", infouser);
    console.log("token: ", token);
    console.log("info user: ", infouser._id);


    //crear nuevo pedido
    const order = async() => {
        //console.log("la id de la peli que voy a pedir es......",peli.id);
            //Generación del body
            let body = {


                nombre_cliente: infouser.name,
                email_cliente: infouser.email,
                id_cliente: infouser._id,
                name_film: peli.title,
                id_film: peli.id,
                name_original_film: peli.original_title,
                fecha_recogida: new Date(),
                

                /*numero: user.name,
                dependiente: user.email,
                fecha_recogida: user.password,
                fecha_entrega: user.telf,*/
            }

            //Conexion a axios y envio de datos
            console.log("ENVIANDO AL BACKEND ESTO....",body);
            
            
            try {
                let res = await axios.post("https://app-movies-mongoose.herokuapp.com/pedido/", body, {
                    headers:{
                        'Authorization': `Bearer ${token}` 
                    }
                });
                console.log("imprimir res: ",res)
                //Guardado de datos en localStorage
            
               // history("/profile");
        
                
            } catch (error) {
                console.log(error)
            }
    }

    return (
        <div className="profilePelicula">
            <div>{peli.original_title}</div>
            <div><img alt={peli.id} className="cartel"src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`} /></div>
            <div><p>{peli.release_date}</p></div>
            <div><p>{peli.overview}</p></div>
            <button onClick={()=> order()}>ALQUILAR LA PELICULA</button>
        </div>
    )
}

export default connect((state)=>({
    data_user: state.data_user
}))(Film);


