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
                <Boton destino="Login" url="/login"/>
                <Boton destino="Register" url="/register"/>
            </div>
        </div>
    )

};

export default Header;