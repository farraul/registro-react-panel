
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import './Admin.scss';
import Boton from '../../Components/Boton/Boton';
import Panel_admin from '../../Components/Panel_Admin/Panel_Admin';




const Admin = (props) => {
    const history = useNavigate();

   const Admin = () => {
        //vaciamos redux. Así ya no estamos logueados
        props.dispatch({ type: LOGOUT });
        history("/login");
        console.log("entrologout");
    }


    return (
            <div className="main-container-admin">
                <div className="side-bar-admin">

                <Panel_admin/>
               
                

                </div>



        </div>

    )



};


export default connect((state) => ({
    data_user: state.data_user,
    data_film: state.data_film,
}))(Admin);
