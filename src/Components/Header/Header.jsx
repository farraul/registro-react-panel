import React from 'react';
import { useNavigate } from 'react-router-dom';
import Boton from '../Boton/Boton';
import logo from '../../images/logo-raul.png';


const Header = () => {
    const history = useNavigate();
    const llevame = () => {
        history("/");
    }

    return(
        <div className="designHeader">
            <div>
                <img className="logo" src={logo} alt="logo" onClick={()=>llevame()} />
            </div>
            <div className="menu">
                <Boton destino="Home" url="/"/>
                <Boton destino="Films" url="/films"/>
                <Boton destino="Perfil" url="/profile"/>
                <Boton destino="Registro" url="/register"/>
                <Boton destino="Login" url="/login"/>
                
            </div>
        </div>
    )

};

export default Header;