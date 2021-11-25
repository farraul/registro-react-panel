
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import './Adminsecond.scss';
import Boton from '../../Components/Boton/Boton';



const Adminsecond = (props) => {

    const [datosusuario, setDatosUsuarios] = useState("");
    const [userfounds, setuserfounds] = useState("");
    const [datosperfil, setDatosPerfil] = useState("");
    let filtered = "";
    const history = useNavigate();

    useEffect(() => {
        takeusers();
    }, [])
    const logOut = () => {
        //vaciamos redux. Así ya no estamos logueados
        props.dispatch({ type: LOGOUT });
        history("/login");
        console.log("entrologout");
    }
 


    const takeusers = async () => {
        try {
            let res = await axios.get("https://app-movies-mongoose.herokuapp.com/usuario/");
            setDatosUsuarios(res.data);
            setDatosPerfil(res.data);
            console.log("resdata: ", res.data);

        } catch (error) {
            console.log(error);
        }
        //console.log("datosusuario: ",datosusuario);
    };


    const writeuser = (e) => {
        console.log("e.target.value: ", e.target.value)
        if (e.target.value != "") {//no me funciona este if
            console.log("entro: ", e.target.value)

            filtered = datosusuario.filter(word => {
                return word.name.toLowerCase().match(e.target.value.toLowerCase());
            })
            setuserfounds(filtered);
        }

    }





    if (props.data_user?.token !== '') {


        return (

            <div className="">

                   
                        {/*<div className="side-bar-elements logout-admin" onClick={() => logOut()}>Desconectar</div>*/}


                <div className="main-container-one">
                    <h1 className="admin-h1"></h1>
                    <input className="imput-search mb-2" type="text" name="film" onChange={writeuser} title="film" lenght="30" placeholder="Buscar usuario" />



                    <div className="">


                        {userfounds.length > 0 &&
                            <div>
                                <div className="users-registers-title">
                                    <p className="colum-components-admin-print" >Nombre</p>
                                    <p className="colum-components-admin-print" >Email</p>
                                    <p className="colum-components-admin-print" >Id</p>
                                </div>
                                <div id="table-home-print">
                                    <div className="colum-home-print">

                                        {userfounds?.map(run => {
                                            return (
                                                <p className="colum-components-admin-print-register" key={run._id}>
                                                    {run.name}
                                                </p>
                                            )
                                        })}
                                    </div>
                                    <div className="colum-home-print">
                                        {userfounds?.map(run => {
                                            return (
                                                <p className="colum-components-admin-print-register" key={run._id}>
                                                    {run.email}
                                                </p>
                                            )
                                        })}
                                    </div>
                                    <div className="colum-home-print">
                                        {userfounds?.map(run => {
                                            return (
                                                <p className="colum-components-admin-print-register" key={run._id}>
                                                    {run._id}
                                                </p>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                        }
                    </div>

                    {datosperfil.length > 0 &&
                            <div>
                                <h2>Todos los usuarios</h2>
                                <div className="all-users-registers-title">
                                    <p className="colum-components-admin-print" >Nombre</p>
                                    <p className="colum-components-admin-print" >Email</p>
                                    <p className="colum-components-admin-print" >Id</p>
                                </div>
                                <div id="table-home-print">
                                    <div className="colum-home-print">

                                        {datosperfil.map(run => {
                                            return (
                                                <p className="colum-components-admin-print-register" key={run._id}>
                                                    {run.name}
                                                </p>
                                            )
                                        })}
                                    </div>
                                    <div className="colum-home-print">
                                        {datosperfil.map(run => {
                                            return (
                                                <p className="colum-components-admin-print-register" key={run._id}>
                                                    {run.email}
                                                </p>
                                            )
                                        })}
                                    </div>
                                    <div className="colum-home-print">
                                        {datosperfil.map(run => {
                                            return (
                                                <p className="colum-components-admin-print-register" key={run._id}>
                                                    {run._id}
                                                </p>
                                            )
                                        })}
                                    </div>

                                </div>
                            </div>
                        }

                </div>

            </div>

        )
    }


};





export default connect((state) => ({
    data_user: state.data_user,
    data_film: state.data_film,
}))(Adminsecond);
