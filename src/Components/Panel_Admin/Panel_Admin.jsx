import React, { useState, useEffect } from 'react';
import './Panel_Admin.scss';
import Adminsecond from '../../Containers/Adminsecond/Adminsecond'
import Admin_tree from '../../Containers/Adminthird/Adminthird'
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';






const Panel_admin = (props) => {
    const history = useNavigate();

    const [screenselected, setscreenselected] = useState(<Adminsecond/>);


  //logout
  const logOut = () => {
    //vaciamos redux. Así ya no estamos logueados
    props.dispatch({ type: LOGOUT });
    history("/login");
}

    return (
        <div className="panel-admin">
            <div className="panel-admin-side-bar">
                <div>
                    <p onClick={() =>setscreenselected(<Adminsecond/>)}>Buscar Usuarios</p>
                </div>
                <div>
                    <p onClick={() =>setscreenselected(<Admin_tree/>)}>Toda la info</p>
                </div>
                <div>
                    <p onClick={() => logOut()}>LogOut</p>
                </div>
            </div>

            {/* <div className="admin-sidebar">
                        <div className="side-bar-elements"><Boton destino="Buscar Usuario" url="/adminsecond" /></div>
                        <div className="side-bar-elements"><Boton destino="Usuarios y pedidos" url="/adminthird" /></div>
                        <div className="side-bar-elements logout-admin" onClick={() => logOut()}>Desconectar</div>

              </div>*/}


            <div className="panel-admin-screen-right">
               
            {screenselected}

            </div>





        </div>

    )
};


export default connect((state) => ({
    data_user: state.data_user,
  
}))(Panel_admin);
