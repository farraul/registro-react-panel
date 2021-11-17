import React from 'react';
import { useNavigate } from 'react-router-dom';
import Boton from '../Boton/Boton';
import { connect } from 'react-redux';
import logo from '../../images/raul-logo.png';


const Header = (props) => {
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

                { props.data_user?.user?._id ? <Boton destino="Perfil" url="/profile"/>: null}
                { !props.data_user?.user?._id && <Boton destino="Registro" url="/register"/> }
                { /*props.data_user?.user?._id ?null :<Boton destino="Registro" url="/register"/>*/ }
                { !props.data_user?.user?._id && <Boton destino="Login" url="/login"/>}
                { props.data_user?.user?.rol=="admin" ? <Boton destino="Admin" url="/admin"/>: null}

                
            </div>
        </div>
    )

};


export default connect((state) => ({
    data_user: state.data_user

})) (Header);