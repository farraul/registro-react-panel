
import { getDefaultNormalizer } from '@testing-library/dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const Film = () => {

    const [peli, setPeli] = useState(JSON.parse(localStorage.getItem("choosenFilm")));

    useEffect(() => {
        console.log(peli);
    }, []);



    //crear nuevo pedido
    const order = async() => {
        //console.log("la id de la peli que voy a pedir es......",peli.id);
            //Generación del body
            let body = {
                numero: 555,
                dependiente: "dependientedepeueba",
                fecha_recogida: "11/22/1995",
                fecha_entrega: "12/22/1995",

                /*numero: user.name,
                dependiente: user.email,
                fecha_recogida: user.password,
                fecha_entrega: user.telf,*/
            }

            //Conexion a axios y envio de datos
            console.log("ENVIANDO AL BACKEND ESTO....",body);
            
            
            try {
                let res = await axios.post("https://app-movies-mongoose.herokuapp.com/pedido/", body);
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



export default Film;