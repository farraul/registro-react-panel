
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import './Admin.scss';
import Boton from '../../Components/Boton/Boton';




const Admin = (props) => {
    const history = useNavigate();

   const logOut = () => {
        //vaciamos redux. Así ya no estamos logueados
        props.dispatch({ type: LOGOUT });
        history("/login");
        console.log("entrologout");
    }


    return (
            <div className="main-container-admin">
                <div className="side-bar-admin">

                    <div className="admin-sidebar">
                        <div className="side-bar-elements"><Boton destino="Buscar Usuario" url="/adminsecond" /></div>
                        <div className="side-bar-elements"><Boton destino="Usuarios y pedidos" url="/adminthird" /></div>
                        <div className="side-bar-elements logout-admin" onClick={() => logOut()}>Desconectar</div>

                    </div>
                </div>
                <div className="front-admin">
                    <div>
                        <h1 className>Bienvenido al panel del admin</h1>
                    </div>

                </div>



        </div>

    )



};


export default connect((state) => ({
    data_user: state.data_user,
    data_film: state.data_film,
}))(Admin);
