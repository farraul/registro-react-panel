
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import './Adminfive.scss';



const Adminfive = (props) => {
    const history = useNavigate();
    const [peliculas, setPeliculas] = useState([]);
    const [thefilm_morepopular, setthefilm_morepopular] = useState([]);
    const [thefilm_name_morepopular, setthefilm_name_morepopular] = useState([]);
    const [thefilm_image_morepopular, setthefilm_image_morepopular] = useState([]);


    const [thefilm_morescore, setthefilm_morescore] = useState([]);
    const [thefilm_name_morescore, setthefilm_name_morescore] = useState([]);






    useEffect(() => {

        traePeliculas();


        var cube = document.querySelector('.cube');
        var radioGroup = document.querySelector('.radio-group');
        var currentClass = '';

        function changeSide() {
            var checkedRadio = radioGroup.querySelector(':checked');
            var showClass = 'show-' + checkedRadio.value;
            if (currentClass) {
                cube.classList.remove(currentClass);
            }
            cube.classList.add(showClass);
            currentClass = showClass;
        }
        // set initial side
        changeSide();

        radioGroup.addEventListener('change', changeSide);


        console.log("props34:", props);


    }, [])




    useEffect(() => {
    })

    const traePeliculas = async () => {
        let res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=51c1099989a6923f3d12154210fc2cf7&language=en-US&page=1");
        setPeliculas(res.data.results);
        console.log("datos", res.data.results);
        

    };

    
    useEffect(() => {
        film_morepopular();
    }, [peliculas])






    const film_morepopular = () => {
        let array = peliculas;
        console.log("arraye", array);


        if (array.length == 0)
            return null;

        let maxCount_morepopular = 0;
        let maxCount_morescore = 0;



        for (var i = 0; i < array.length; i++) {
            if (array[i].popularity > maxCount_morepopular) {
                maxCount_morepopular = array[i].popularity;
                setthefilm_morepopular(array[i].popularity);
                setthefilm_name_morepopular(array[i].title);
                setthefilm_image_morepopular('https://image.tmdb.org/t/p/original'+array[i].poster_path);

            }


            if (array[i].vote_average > maxCount_morescore) {
                console.log("maxCount_morescore: ", maxCount_morescore)

                maxCount_morescore = array[i].vote_average;
                setthefilm_morescore(maxCount_morescore);
                setthefilm_name_morescore(array[i].title)
                console.log("thefilm_name_morescore", thefilm_name_morescore);



            }
        }

    }





    return (
        <div>
            <div className="back-of-the-cube">
                <div class="scene">
                    <div class="cube">
                        <div class="cube__face cube__face--front">
                            <div className="estadistics-cube-front">
                                <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-title">Popular</p>
                                </div>
                              <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-film"> {thefilm_name_morepopular}</p>
                                </div>
                                 {/* <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-film"><img className="estadistics-cube-front-inside-p-film-image" src={`https://image.tmdb.org/t/p/original/${thefilm_image_morepopular}`}/></p>
                                </div>*/}
                            </div>
                        </div>
                        
                        <div class="cube__face cube__face--back">
                        <div className="estadistics-cube-front">
                                <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-title">Popular</p>
                                </div>
                              <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-film"> {thefilm_name_morepopular}</p>
                                </div>
                                 {/* <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-film"><img className="estadistics-cube-front-inside-p-film-image" src={`https://image.tmdb.org/t/p/original/${thefilm_image_morepopular}`}/></p>
                                </div>*/}
                            </div>
                        </div>
                        <div class="cube__face cube__face--right">
                        <div className="estadistics-cube-front">
                                <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-title">Popular</p>
                                </div>
                              <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-film"> {thefilm_name_morepopular}</p>
                                </div>
                                 {/* <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-film"><img className="estadistics-cube-front-inside-p-film-image" src={`https://image.tmdb.org/t/p/original/${thefilm_image_morepopular}`}/></p>
                                </div>*/}
                            </div>
                        </div>
                        <div class="cube__face cube__face--left">
                        <div className="estadistics-cube-front">
                                <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-title">Popular</p>
                                </div>
                              <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-film"> {thefilm_name_morepopular}</p>
                                </div>
                                 {/* <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-film"><img className="estadistics-cube-front-inside-p-film-image" src={`https://image.tmdb.org/t/p/original/${thefilm_image_morepopular}`}/></p>
                                </div>*/}
                            </div>
                        </div>
                        <div class="cube__face cube__face--top">
                        <div className="estadistics-cube-front">
                                <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-title">Popular</p>
                                </div>
                              <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-film"> {thefilm_name_morepopular}</p>
                                </div>
                                 {/* <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-film"><img className="estadistics-cube-front-inside-p-film-image" src={`https://image.tmdb.org/t/p/original/${thefilm_image_morepopular}`}/></p>
                                </div>*/}
                            </div>
                        </div>
                        <div class="cube__face cube__face--bottom">
                        <div className="estadistics-cube-front">
                                <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-title">Popular</p>
                                </div>
                              <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-film"> {thefilm_name_morepopular}</p>
                                </div>
                                 {/* <div className="estadistics-cube-front-inside">
                                    <p className="estadistics-cube-front-inside-p-film"><img className="estadistics-cube-front-inside-p-film-image" src={`https://image.tmdb.org/t/p/original/${thefilm_image_morepopular}`}/></p>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="panel-sides-square">



            </div>
            <p class="radio-group">
                <label>
                    <input type="radio" name="rotate-cube-side" value="front" checked /> front
                </label>
                <label>
                    <input type="radio" name="rotate-cube-side" value="right" /> right
                </label>
                <label>
                    <input type="radio" name="rotate-cube-side" value="back" /> back
                </label>
                <label>
                    <input type="radio" name="rotate-cube-side" value="left" /> left
                </label>
                <label>
                    <input type="radio" name="rotate-cube-side" value="top" /> top
                </label>
                <label>
                    <input type="radio" name="rotate-cube-side" value="bottom" /> bottom
                </label>
            </p>


        </div>

    )





};


export default connect((state) => ({
    data_user: state.data_user,
    data_film: state.data_film,

}))(Adminfive);
