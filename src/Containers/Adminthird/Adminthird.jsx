
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import './Adminthird.scss';
import Boton from '../../Components/Boton/Boton';
import Icon_search from'../../images/lupa.png';



const Adminthird = (props) => {

  
    const [datospedidos, setdatospedidos] = useState("");
    const [id_client, setid_client] = useState("");
    const [data_order, setdataorder_client] = useState("");
    const [name_client, setname_client] = useState("");
    const [email_client, setemail_client] = useState("");
    const [name_film, setname_film] = useState("");
    const [number_order, setnumber_order] = useState("");

    const [id_film,setid_film] = useState("");




    useEffect(() => {
    
        takepedidos();

    }, [])


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


    const ver_menos = () => {
        let element = document.getElementById("myDIV");
        element.classList.remove("mystyle");

        let element_back = document.getElementById("open-files-background");
        element_back.classList.remove("open-files-back-dark");
    }



    const ver_mas = async (run) => {
        let element = document.getElementById("myDIV");
        element.classList.add("mystyle");
        let element_back = document.getElementById("open-files-background");
        element_back.classList.add("open-files-back-dark");

       
        setid_client(run.id_cliente);
        setemail_client(run.email_cliente);
        setdataorder_client(run.fecha_recogida);
        setname_client(run.nombre_cliente);
        setname_film(run.name_film);
        setnumber_order(run._id);
        setid_film(run.id_film);

        console.log("run: ", run)

    }





    if (props.data_user?.token !== '') {
        return (

            <div className="main-container-admin">
                <div className="main-container-one">
                   
                    <div>

                        <div>
                            <h2 className="text-center">Últimos pedidos</h2>
                            <div className="last-order-titles">
                                <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">Número pedido</p></div>
                                <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">Fecha pedido</p></div>
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
                                                            {run.name_film}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p onclick="" className="colum-components-admin-print-pedidos-vermas" onClick={() => ver_mas(run)}>
                                                        <img className="icon-search" src={Icon_search} />

                                                     
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                            }


                        <div className="" id="open-files-background">
                            <div className="abrepeliculas" id="myDIV">
                                <div className="salida" id="X" onClick={() => ver_menos()}>X</div>
                                <div className="two-tables">
                                    <div className="left-titles">
                                        <div className="table-flex-data">
                                            <div> <p>Número de pedido: </p></div>
                                        </div>
                                        <div className="table-flex-data">
                                            <div><p>Fecha pedido:</p></div>
                                        </div>
                                        <div className="table-flex-data">
                                            <div><p>Nombre cliente:</p></div>
                                        </div>
                                        <div className="table-flex-data">
                                            <div><p>Email cliente: </p> </div>
                                        </div>
                                        <div className="table-flex-data">
                                            <div><p>Pelicula alquilada: </p></div>
                                        </div>
                                        <div className="table-flex-data">
                                            <div><p>Id de pelicula:</p></div>
                                        </div>
                                    </div>
                                    <div className="right-info">
                                        <div className="table-flex-data">
                                            <div> <p className="ml-1">{number_order}</p></div>
                                        </div>
                                        <div className="table-flex-data">
                                            <div><p>{data_order}</p></div>
                                        </div>
                                        <div className="table-flex-data">
                                            <div><p>{name_client}</p></div>
                                        </div>
                                        <div className="table-flex-data">
                                            <div><p>{email_client}</p></div>
                                        </div>
                                        <div className="table-flex-data">
                                            <div><p>{name_film} </p></div>
                                        </div>
                                        <div className="table-flex-data">
                                            <div><p>{id_film} </p></div>
                                        </div>




                                      
                                    </div>



                                </div>





                            </div>
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
