
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import './Adminfour.scss';
import {TAKE_STADISTICS} from '../../redux/types';



const Adminfour = (props) => {
    const history = useNavigate();
    const [peliculas, setPeliculas] = useState([]);
    const [thefilm_morepopular, setthefilm_morepopular] = useState([]);
    const [thefilm_name_morepopular, setthefilm_name_morepopular] = useState([]);


    const [thefilm_morescore, setthefilm_morescore] = useState([]);
    const [thefilm_name_morescore, setthefilm_name_morescore] = useState([]);




    useEffect(() => {
        traePeliculas();
    },[])

    useEffect(() => {
        film_morepopular();
    }, [peliculas])

    const traePeliculas = async () => {
        let res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=51c1099989a6923f3d12154210fc2cf7&language=en-US&page=1");
        setPeliculas(res.data.results);
        console.log("datos", res.data.results);

    };

    const film_morepopular = () =>
    {
        let array=peliculas;
        console.log("array",array);


        if(array.length == 0)
            return null;
      
        let maxCount_morepopular = 0;
        let maxCount_morescore=0;
     


        for(var i = 0; i < array.length; i++)
        {
            if(array[i].popularity > maxCount_morepopular )
            {
                maxCount_morepopular =array[i].popularity;
                setthefilm_morepopular(array[i].popularity);
                setthefilm_name_morepopular(array[i].title);

                props.dispatch({type:TAKE_STADISTICS,payload:setthefilm_morepopular});

                

            }


            if(array[i].vote_average > maxCount_morescore)
            {
                console.log("maxCount_morescore: ", maxCount_morescore)

                maxCount_morescore =array[i].vote_average;
                setthefilm_morescore(array[i].vote_average);
                setthefilm_name_morescore(array[i].title)
    }
            }
        }

     
    



    return (
        <div>
            <div>
                <div className="admin-films-panel-statistics">
                    <div className="admin-films-statistics">
                        <div className="admin-films-statistics-title">
                            Peliculas totales
                        </div>
                        <div className="admin-films-statistics-score">
                            {peliculas.length}
                        </div>
                    </div>
                    <div className="admin-films-stadistics">
                        <div className="admin-films-statistics-title">
                        Pelicula más popular
                        </div>
                        <div className="admin-films-statistics-score">
                        {thefilm_morepopular}
                        <br/>
                        {thefilm_name_morepopular}
                        </div>

                    </div>
                    <div className="admin-films-stadistics">
                        <div className="admin-films-statistics-title">
                        Pelicula con mejor nota
                        </div>
                        <div className="admin-films-statistics-score">
                        {thefilm_morescore}
                        <br/>
                        {thefilm_name_morescore}
                        </div>

                    </div>






                </div>
            </div>

            {peliculas[1]?.title &&
                <div className="displayPeliculas">
                    {
                        peliculas.map((peli) => {
                            return (
                                <div className="peli" key={peli.id}>
                                    <img alt={peli.id} className="cartel" src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`} />
                                    <p className="title-film">{peli.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            }



        </div>


    )





};


export default connect((state) => ({
    data_user: state.data_user,
    data_film: state.data_film,
}))(Adminfour);
