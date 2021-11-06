import React from 'react';

import './Header.css';
import Boton from '../Boton/Boton';
import logo from '../../images/logo-raul.png';


const Header = () => {

    return(
        <div className="designHeader">
            <div>
                <img id="logo" src={logo} alt="logo" />
            </div>
            <div id="menu">
                <Boton destino="Home" url="/"/>
                <Boton destino="Perfil" url="/profile"/>
                <Boton destino="Registro" url="/register"/>
                <Boton destino="Login" url="/login"/>
                
            </div>
        </div>
    )

};

export default Header;