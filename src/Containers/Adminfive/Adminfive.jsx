
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import './Adminfive.scss';
import data_estad from '../../redux/reducers/data_estad';



const Adminfive = (props) => {
    const history = useNavigate();




    useEffect(() => {

        var cube = document.querySelector('.cube');
        var radioGroup = document.querySelector('.radio-group');
        var currentClass = '';
        
        function changeSide() {
          var checkedRadio = radioGroup.querySelector(':checked');
          var showClass = 'show-' + checkedRadio.value;
          if ( currentClass ) {
            cube.classList.remove( currentClass );
          }
          cube.classList.add( showClass );
          currentClass = showClass;
        }
        // set initial side
        changeSide();
        
        radioGroup.addEventListener( 'change', changeSide );


         console.log("props34:", props);


    }, [])

    useEffect(() => {
    })


  




    return (
        <div>
            <div className="back-of-the-cube">
                <div class="scene">
                    <div class="cube">
                        <div class="cube__face cube__face--front">
                        <p className="estadistics-cube-front">Pelicula con mejor nota</p>
                        <br/>
                        <p> {props.data_estad}</p>


                        </div>
                        <div class="cube__face cube__face--back">back</div>
                        <div class="cube__face cube__face--right">right</div>
                        <div class="cube__face cube__face--left">left</div>
                        <div class="cube__face cube__face--top">top</div>
                        <div class="cube__face cube__face--bottom">bottom</div>
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
    data_estad: state.data_estad,

}))(Adminfive);
