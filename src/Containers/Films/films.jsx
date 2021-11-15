
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import pocima from '../../images/progress.gif';
import {useNavigate} from 'react-router-dom';
import {TAKE_FILM} from '../../redux/types';
import { connect } from 'react-redux';
import data_user from '../../redux/reducers/data_user';


const Films = (props) => {
    let navigate = useNavigate();

    const [peliculas, setPeliculas] = useState([]);

    useEffect(()=>{

        setTimeout(()=>{
            traePeliculas();
        },2000);
    },[]);

    useEffect(()=>{
        console.log("props.data_user:  ",props.data_user);
    });

    const traePeliculas = async () => {
            let res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=51c1099989a6923f3d12154210fc2cf7&language=en-US&page=1");
            setPeliculas(res.data.results);
            console.log("datos",res.data.results); 


    };

    const escogePelicula = (data_film) => {
      
        console.log("datos:",data_film);
        props.dispatch({type:TAKE_FILM,payload:data_film});
          

        //redirigire a el perfil de la película....
        navigate("/film");
    }

    if(peliculas[1]?.title){ //"?" significa que si falla que vaya al else, sino se bloquea

        return (
            <div className="displayPeliculas">
                {
                    peliculas.map((peli) => {
                        return (
                            <div className="peli" key={peli.id}>
                                <img alt={peli.id} className="cartel" onClick={()=>escogePelicula(peli)} src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`}/>
                                <p className="title-film">{peli.title}</p>

                            </div>
                        )
                    })
                }

            </div>
        )

    } else {

        return (
            <div className="container-loader">
                <img className="loader" src={pocima}/>
            </div>
        )
    }

    
}


export default connect((state)=>({
    data_user: state.data_user
}))(Films);
