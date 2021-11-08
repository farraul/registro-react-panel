import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {

    const history = useNavigate();
/*
        let body = {
            email: credentials.correo,
            password: credentials.clave
        };*/
        const [msgError, setmsgError] = useState("");
        const [dataprint, setDatosPerfil] = useState(JSON.parse(localStorage.getItem("data_api")));

        const [user, setUser] = useState({
            id: '',
            name: '',
            email: '',
            telf: ''
        });

      const getdata_api=() =>{
        try {

        let res =  axios.get("https://app-movies-mongoose.herokuapp.com/usuario/");
        res.then((res)=>{

                //console.log("imprimir data: ", res.data);
                const getdata = res.data;
               
                localStorage.setItem("data_api", JSON.stringify(getdata));
                setDatosPerfil(getdata);   
            })

            //localStorage.setItem("datosLogin", JSON.stringify(res.data));
           // localStorage.setItem("datosLogin", JSON.stringify(res));
           // localStorage.setItem("datosLogin", JSON.stringify(res.data.user));
               
        } catch (error) {
            setmsgError("Error al logearmeee"); 

        }
    }
        

        useEffect(() => {
            getdata_api();
            console.log("imprimir data",dataprint) //ese se hace la primera vez que carga el componente
        }, [])
    
       
    return (
        <div>
            <div>
                <h1>últimos usuarios registrados</h1>
                
                <div id="table-home-print">
                    <div class="colum-home-print">
                        {dataprint.map(run => {
                            return (
                                    <p className="colum-components-home-print" key={run._id}>
                                    Nombre: {run.name}
                                    </p>
                                    )
                        })}
                    </div>
                    <div class="colum-home-print">
                        {dataprint.map(run => {
                            return (
                                    <p className="colum-components-home-print" key={run._id}>
                                    Email: {run.email}
                                    </p>
                                    )
                        })}
                    </div>
                    <div class="colum-home-print">
                        {dataprint.map(run => {
                            return (
                                    <p className="colum-components-home-print" key={run._id}>
                                    Id: {run._id}
                                    </p>
                                    )
                        })}
                    </div>
                    <div>


                    </div>
                </div>

            </div>
        </div>


    )
};

export default Home;