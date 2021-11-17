
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import './Admin.scss';
import profile from '../../images/profile.png';



const Admin = (props) => {

    const [datosperfil, setDatosPerfil] = useState("");
    const [datospedidos, setdatospedidos] = useState("");

    useEffect(() => {
        takeusers();
        takepedidos();




    }, [])

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
            let res_pedido = await axios.get("https://app-movies-mongoose.herokuapp.com/pedido",  {
                headers:{
                    'Authorization': `Bearer ${props.data_user.token}` 
                }
            });
            setdatospedidos(res_pedido.data);
            console.log("res pedidos: ", res_pedido)
        } catch (error) {
            console.log(error);
        }
    };



    if (props.data_user?.token !== '') {
        console.log("entre aqui.");

        return (
            <div className="main-container">
                <div className="main-container-one">
                    <h1 className="admin-h1"></h1>


                    <div className="">
                        <h2 className="text-center mt-2">Últimos usuarios registrados </h2>

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
                            <h2 className="text-center mt-4">Últimos pedidos</h2>
                            <div className="last-order-titles">
                                <div><p className="colum-components-admin-print-pedidos-titles">Número pedido</p></div>
                                <div><p className="colum-components-admin-print-pedidos-titles">Fecha pedido</p></div>
                                <div><p className="colum-components-admin-print-pedidos-titles">Nombre cliente</p></div>
                                <div><p className="colum-components-admin-print-pedidos-titles">Email cliente</p></div>
                                <div><p className="colum-components-admin-print-pedidos-titles">Pelicula alquilada</p></div>
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
                                            </div>
                                            )
                                        })}
                                    </div>
                                   
                                </div>
                            }



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
}))(Admin);
