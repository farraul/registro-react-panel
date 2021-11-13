import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const history = useNavigate();
    /*
            let body = {
                email: credentials.correo,
                password: credentials.clave
            };*/
    const [msgError, setmsgError] = useState("");
    const [datosperfil, setDatosPerfil] = useState("");

    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        telf: ''
    });

    useEffect(() => {
        traePeliculas();
    }, []);


    const traePeliculas = async () => {
        try {
            let res = await axios.get("https://app-movies-mongoose.herokuapp.com/usuario/");
            setDatosPerfil(res.data);
            console.log("res: ", res)
        } catch (error) {
            console.log(error);
        }
    };

if (datosperfil.length>0) {
    return (
        <div className='container-home pt-2'>
            <div>
                <h1 className='h1-home mt-2'>Tu plataforma de peliculas</h1>


                <p className="text-center mt-10">últimos usuarios registrados </p>

                
                <div id="table-home-print">
                    <div class="colum-home-print">
                        
                        {datosperfil.map(run => {
                            return (
                                <p className="colum-components-home-print" key={run._id}>
                                    Nombre: {run.name}
                                </p>
                            )
                        })}
                    </div>
                    <div class="colum-home-print">
                        {datosperfil.map(run => {
                            return (
                                <p className="colum-components-home-print" key={run._id}>
                                    Email: {run.email}
                                </p>
                            )
                        })}
                    </div>
                    <div class="colum-home-print">
                        {datosperfil.map(run => {
                            return (
                                <p className="colum-components-home-print" key={run._id}>
                                    Id: {run._id}
                                </p>
                            )
                        })}
                    </div> 
                </div>
            </div>
        </div>
    )
}
return(
    <div></div>
)

};

export default Home;