import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {TAKE_FILM} from '../../redux/types';
import { connect } from 'react-redux';
import pocima from '../../images/progress.gif';




const Home = (props) => {

    let navigate = useNavigate();


    const [msgError, setmsgError] = useState("");
    const [datosperfil, setDatosPerfil] = useState("");
    const [credentials, setCredentials] = useState({ peli: '' });
    const [films, setfilms] = useState("");
    const [filmfound, setfilmfound] = useState({});


    useEffect(() => {
        bringfilms();
        datauser();


    }, []);


    const bringfilms = async () => {
        let res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=51c1099989a6923f3d12154210fc2cf7&language=en-US&page=1");
        setfilms(res.data.results);
        console.log("datos de pelis", res.data.results);

    };




    const writefilm = (e) => {


        const filtered = films.filter(word => {
            //return word.toLowerCase().match(films.toLowerCase())
  
            return word.original_title.toLowerCase().match(e.target.value.toLowerCase());

            //return word.original_title.match(e.target.value);

        })
        console.log("filtered2:", filtered)
        setfilmfound(filtered);
    }

    const datauser = async () => {
        try {
            let res = await axios.get("https://app-movies-mongoose.herokuapp.com/usuario/");
            setDatosPerfil(res.data);
            console.log("res: ", res)
        } catch (error) {
            console.log(error);
        }
    };


    const escogePelicula = (data_film) => {
      
        console.log("datos:",data_film);
        props.dispatch({type:TAKE_FILM,payload:data_film});
          

        //redirigire a el perfil de la película....
        navigate("/film");
    }

    return (

        <div className='container-home'>
            <div>

                <div className="container-title-search pt-5">
                    <h1 className='h1-home'>RAUL FLIX</h1>
                    <input className="imput-search" type="text" name="film" onChange={writefilm} title="film" lenght="30" placeholder="Escribe pelicula" />
                </div>
                <div className="container-buscador">

                    
                    {filmfound.length > 0 &&
                    <div id="solutions" className="container-equals-films">

                        {filmfound.map((peli) => {
                            return (
                                <div className="peli" key={peli.id}>
                                    <img className="image-films"src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`} onClick={()=>escogePelicula(peli)} />

                                    <p className="title-film">{peli.title}</p>
                                </div>
                            ) 
                        })}

                    </div>
                    }


                    
                </div>
 {/*
                <p className="text-center mt-10">últimos usuarios registrados </p>   
                {datosperfil.length > 0 &&
                    <div id="table-home-print">
                        <div className="colum-home-print">

                            {datosperfil.map(run => {
                                return (
                                    <p className="colum-components-home-print" key={run._id}>
                                        Nombre: {run.name}
                                    </p>
                                )
                            })}
                        </div>
                        <div className="colum-home-print">
                            {datosperfil.map(run => {
                                return (
                                    <p className="colum-components-home-print" key={run._id}>
                                        Email: {run.email}
                                    </p>
                                )
                            })}
                        </div>
                        <div className="colum-home-print">
                            {datosperfil.map(run => {
                                return (
                                    <p className="colum-components-home-print" key={run._id}>
                                        Id: {run._id}
                                    </p>
                                )
                            })}
                        </div>
                        </div>*/}
                

            </div>
        </div>
    )

    return (
        <div style={{ color: 'red' }}>asfdsf</div>
    )



}


export default connect((state)=>({
    data_user: state.data_user
}))(Home);
