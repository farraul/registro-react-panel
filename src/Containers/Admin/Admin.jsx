
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import './Admin.scss';
import profile from '../../images/profile.png';



const Admin = (props) => {

    const [datosperfil, setDatosPerfil] = useState("");
    const [pedidos, setpedidos] = useState("");

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
            let res_pedido = await axios.get("https://app-movies-mongoose.herokuapp.com/pedido/");
            setDatosPerfil(res_pedido.data);
            console.log("res: ", res_pedido)
        } catch (error) {
            console.log(error);
        }
    };



    if (props.data_user?.token !== '') {
        console.log("entre aqui.");

        return (
            <div className="main-container">
                <div className="main-container-one">
                    <h1>Panel de control admin</h1>


                    <div className="">
                        <p className="text-center mt-10">Últimos usuarios registrados </p>
                        {datosperfil.length > 0 &&
                            <div id="table-home-print">
                                <div className="colum-home-print">

                                    {datosperfil.map(run => {
                                        return (
                                            <p className="colum-components-home-print" key={run._id}>
                                                Nombre: {run.name}
                                            </p>
                                        )
                                    })}
                                </div>
                                <div className="colum-home-print">
                                    {datosperfil.map(run => {
                                        return (
                                            <p className="colum-components-home-print" key={run._id}>
                                                Email: {run.email}
                                            </p>
                                        )
                                    })}
                                </div>
                                <div className="colum-home-print">
                                    {datosperfil.map(run => {
                                        return (
                                            <p className="colum-components-home-print" key={run._id}>
                                                Id: {run._id}
                                            </p>
                                        )
                                    })}
                                </div>

                            </div>
                        }
                    </div>
                    <div>

                        <div>
                            <p className="text-center mt-10">Últimos usuarios registrados </p>
                            {datosperfil.length > 0 &&
                                <div id="table-home-print">
                                    <div className="colum-home-print">

                                        {datosperfil.map(run => {
                                            return (
                                                <p className="colum-components-home-print" key={run._id}>
                                                    Nombre: {run.name}
                                                </p>
                                            )
                                        })}
                                    </div>
                                    <div className="colum-home-print">
                                        {datosperfil.map(run => {
                                            return (
                                                <p className="colum-components-home-print" key={run._id}>
                                                    Email: {run.email}
                                                </p>
                                            )
                                        })}
                                    </div>
                                    <div className="colum-home-print">
                                        {datosperfil.map(run => {
                                            return (
                                                <p className="colum-components-home-print" key={run._id}>
                                                    Id: {run._id}
                                                </p>
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
