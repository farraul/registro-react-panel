
import { getDefaultNormalizer } from '@testing-library/dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import data_film from '../../redux/reducers/data_film';





const Film = (props) => {
    const history = useNavigate();

    useEffect(() => {
        console.log("props.data_user:  ",props.data_user);

    }, []);

    const [buttonrent, setmsgButtonrent] = useState(  <button  className="button-rent-fiml mt-2" onClick={()=> order()}>ALQUILAR LA PELICULA</button>);

    //crear nuevo pedido
    const order = async() => {
        //console.log("la id de la peli que voy a pedir es......",peli.id);
            //Generación del body
            let body = {


                nombre_cliente: props.data_user.user.name,
                email_cliente: props.data_user.user.email,
                id_cliente: props.data_user.user._id,
                name_film: props.data_film.title,
                id_film: props.data_film.id,
                name_original_film: props.data_film.original_title,
                fecha_recogida: new Date(),
                release_data: props.data_film.release_date,
                overview: props.data_film.overview,
                release_date: props.data_film.release_date,
                

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
                        'Authorization': `Bearer ${props.data_user.token}` 
                    }
                });

                /*let datos = res.data;
                props.dispatch({type:SAVEFILM,payload:datos});
                console.log("datos:",datos);*/
        

               
                 
            
                   setmsgButtonrent("✓ Pelicula alquilada");
                   
                   
                   setTimeout(()=>{
                    history("/profile");
                },2000);
            
                 

            } catch (error) {
                console.log(error)
            }
    }



    return (
        <div className="profilePelicula">
            <div><p>{ props.data_film.title}</p></div>
            <div><img alt={props.data_film.title} className="cartel"src={`https://image.tmdb.org/t/p/original/${props.data_film.poster_path}`} /></div>
            <div><p>{props.data_film.release_date}</p></div>
            <div><p>{props.data_film.overview}</p></div>
            <div className="container-rented mt-1">{buttonrent}</div>
        </div>
       
          )
 
}

export default connect((state)=>({
    data_film: state.data_film,
    data_user: state.data_user   
}))(Film);


