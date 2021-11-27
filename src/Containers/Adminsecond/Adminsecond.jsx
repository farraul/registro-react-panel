
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
    const [namemorerepeat, setnamemorerepeat] = useState("");
    let filtered = "";
    const history = useNavigate();

    useEffect(() => {
        takeusers();

    }, [])

    useEffect(() => {
        console.log("datosusuario del use effect: ", datosusuario);
        masRepetido();

    }, [datosusuario])


    const takeusers = async () => {
        try {
            let res = await axios.get("https://app-movies-mongoose.herokuapp.com/usuario/");
  
        
            console.log("resdata: ", res.data);
            setDatosUsuarios(res.data)
      

        } catch (error) {
            console.log(error);
        }
     
       

    };


    const writeuser = (e) => {


        console.log("e.target.value: ", e.target.value)
        if (e.target.value != "") {//no me funciona este if
            console.log("entro: ", e.target.value)

            filtered = datosusuario.filter(word => {
                return word.name.toLowerCase().match(e.target.value.toLowerCase());
            })
            setuserfounds(filtered);
            console.log("userfounds.length", userfounds.length)

        } else {
            setuserfounds("");
        }

    }

    {/*Función para sacer nombre más repetido*/}
    const masRepetido = () =>
{
    let array=datosusuario;
    console.log("array",array);
    if(array.length == 0)
        return null;
        console.log("entre2");
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    setnamemorerepeat(maxEl.name);
    //return maxEl;
  
}




    if (props.data_user?.token !== '') {


        return (

            <div className="">


                {/*<div className="side-bar-elements logout-admin" onClick={() => logOut()}>Desconectar</div>*/}


                <div className="main-container-one">
                    <h1 className="admin-h1"></h1>
                         {/* Panel resumen*/}
                         <div className="panel_resume">
                        <div className="panel_resume_data">
                            <div className="panel_resume_title">
                                <p>Nº de usuarios</p>
                            </div>
                            <div className="panel_resume_result">
                            <p>{datosusuario?.length}</p>
                            <p ></p>
                            </div>
                        </div>

                        <div className="panel_resume_data">
                            <div className="panel_resume_title">
                                <p>Nombre más repetido:</p>
                            </div>
                            <div className="panel_resume_result">
                            {namemorerepeat}
                            </div>
                        </div>

                    </div>


                    <input className="imput-search mb-2" type="text" name="film" onChange={writeuser} title="film" lenght="30" placeholder="Buscar usuario" />



                    <div className="">
                        {userfounds != "" ?
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

                            : <p>No hay usuarios con este nombre</p>

                        }
                    </div>

               




                    {datosusuario.length > 0 &&
                        <div>
                            <h2>Todos los usuarios</h2>
                            <div className="all-users-registers-title">
                                <p className="colum-components-admin-print" >Nombre</p>
                                <p className="colum-components-admin-print" >Email</p>
                                <p className="colum-components-admin-print" >Id</p>
                            </div>
                            <div id="table-home-print">
                                <div className="colum-home-print">

                                    {datosusuario.map(run => {
                                        return (
                                            <p className="colum-components-admin-print-register" key={run._id}>
                                                {run.name}
                                            </p>
                                        )
                                    })}
                                </div>
                                <div className="colum-home-print">
                                    {datosusuario.map(run => {
                                        return (
                                            <p className="colum-components-admin-print-register" key={run._id}>
                                                {run.email}
                                            </p>
                                        )
                                    })}
                                </div>
                                <div className="colum-home-print">
                                    {datosusuario.map(run => {
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
