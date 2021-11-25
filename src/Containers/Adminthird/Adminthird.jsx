
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import './Adminthird.scss';
import Boton from '../../Components/Boton/Boton';



const Adminthird = (props) => {

    const [datosperfil, setDatosPerfil] = useState("");
    const [datospedidos, setdatospedidos] = useState("");
    const [ email_client, setemail_client] = useState("");
    const history = useNavigate();

    useEffect(() => {
        takeusers();
        takepedidos();

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
            setDatosPerfil(res.data);
            console.log("res: ", res)
        } catch (error) {
            console.log(error);
        }
    };
    const takepedidos = async () => {
        try {
            let res_pedido = await axios.get("https://app-movies-mongoose.herokuapp.com/pedido", {
                headers: {
                    'Authorization': `Bearer ${props.data_user.token}`
                }
            });
            setdatospedidos(res_pedido.data);
            console.log("res pedidos: ", res_pedido)
        } catch (error) {
            console.log(error);
        }
    };

    const ver_mas = async (run) => {
        let element = document.getElementById("myDIV");
        element.classList.add("mystyle");
        setemail_client(run);
     
    }

    const cierreAlquiler= () => {
        let element = document.getElementById("myDIV");
        element.classList.remove("mystyle");
    }





    if (props.data_user?.token !== '') {
        return (

            <div className="main-container-admin">
                <div className="main-container-one">
                    <h1 className="admin-h1"></h1>


                    <div className="">
                        <h2 className="text-center mt-2">Últimos usuarios registradoss</h2>

                        {datosperfil.length > 0 &&
                            <div>
                                <div className="users-registers-title">
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
                    <div>

                        <div>
                            <h2 className="text-center mt-4">Últimos pedidoss</h2>
                            <div className="last-order-titles">
                                <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">Número pedido</p></div>
                                <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">Fecha pedido</p></div>
                                <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">Nombre cliente</p></div>
                                <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">Email cliente</p></div>
                                <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">Pelicula alquilada</p></div>
                            </div>

                            {datospedidos.length > 0 &&
                                <div id="table-home-print">
                                    <div className="colum-home-print">
                                        {datospedidos.map(run => {
                                            return (
                                                <div className="table-print-pedidos">
                                                    <div className="table-home-print-n-order">
                                                        <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                            {run._id}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <p className="colum-components-admin-print-pedidos" key={run._id}>

                                                            {run.createdAt}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                            {run.nombre_cliente}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                            {run.email_cliente}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                            {run.name_film}
                                                        </p>
                                                    </div>
                                                    <div>
                                                    <p onclick="" className="colum-components-admin-print-pedidos-vermas"  onClick={() => ver_mas(run)}>Ver más</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                            }



                            <div className="abrepeliculas" id="myDIV">
                                    <div className="salida" id="X" onClick={() => cierreAlquiler()}>SALIR</div>
                                    <div>🎬Has alquilado la siguiente pelicula🎬</div> 
                                    <div>Título: </div>
                                    <div>Director: </div>
                                    <div>Género: </div>
                                    <div>Duración: </div>
                                    <div>Lanzamiento: </div>                            
                            </div>



                        </div>


                    </div>
                </div>

            </div>

        )
    }


};


export default connect((state) => ({
    data_user: state.data_user,
    data_film: state.data_film,
}))(Adminthird);
