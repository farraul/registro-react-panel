
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import './profile.scss';
import profile from '../../images/profile.png';



const Profile = (props) => {

       
    const [section_data_update, setsection_data_update]= useState(false);
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        telf: ''
    });

    useEffect(() => {
        console.log("props.data_user?.user?.name:  ", props.data_user.user.name);

    }, [])
//permite que al clicar "cambiar datos" se abra otra pestaña
    const panel_update_data_function = ()=>{
        if(section_data_update!=true){
        setsection_data_update(true);
        }else if(section_data_update==true){
        setsection_data_update(false);  
        }
        console.log("panel_update_data: ",section_data_update);
    }

    //logout
    const logOut = () => {
        //vaciamos redux. Así ya no estamos logueados
        props.dispatch({ type: LOGOUT });
        history("/login");
    }
    const history = useNavigate();
    const logIn = () => {
        history("/login");
    }


    const userHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    {/*función actualizar usuario*/ }
    const update = async () => {
        //Generación del body
        let body = {
            _id: props.data_user?.user?._id,
            name: user.name,
            email: user.email,
            telf: user.telf
        }
        //Conexion a axios y envio de datos
        console.log("ENVIANDO AL BACKEND ESTO....", body);

        try {
            let res = await axios.put(`https://app-movies-mongoose.herokuapp.com/usuario/${props.data_user?.user?._id}`, body);
            //Guardado de datos en localStorage
            console.log("dentro del try", res);
            //if(res?.data){

            props.dispatch({ type: UPDATE_USER, payload: body });

        } catch (error) {

            console.log("error de front", error);
        }





    }
    {/*función borrar un usuario*/ }
    const deleteuser = async () => {
        let body = {
            id: user.id,
        }
        //Conexion a axios y envio de datos
        console.log("ENVIANDO AL BACKEND ESTO....", body);

        try {
            let res = await axios.delete(`https://app-movies-mongoose.herokuapp.com/usuario/${props.data_user?.user?._id}`, body);
            //Guardado de datos en localStorage
            console.log("dentro del try", res);
            /* localStorage.removeItem("datosLogin");
             setDatosPerfil({
                 id: '',
                 name: '',
                 email: '',
                 telf: ''
             });*/

             props.dispatch({ type: LOGOUT });
             history("/login");

        } catch (error) {
            console.log("error de front", error);
        }
    }

    {/* //función borrar  todos los usuarios
                const deletealluser = async () =>{
                    try {
                        let res = await axios.delete(`https://app-movies-mongoose.herokuapp.com/usuario/`);
                        //Guardado de datos en localStorage
                        console.log("dentro del try", res);
                        
                    } catch (error) {
            
                        console.log("error de front", error);
                    }
            }
            */}

    if (props.data_user?.token !== '') {
        console.log("entre aqui.");

        return (
            <div className="main-container">
                <div className="main-container-one-profile">
                <div className="designProfile">

                <div className="data-personal-and-update">
                    <div id="table-profile">
                        <div className="img-h1">
                            <img className="img-profile" src={profile} alt="profile" />
                            <h2>Datos personales</h2>
                        </div>

                        <div className="table-row">
                            <div className="table-field-1">Nombre:</div>

                            <div className="print-fields">{props.data_user?.user?.name}</div>
                        </div>

                        <br />
                        <div className="table-row">
                            <div className="table-field-1">Email:</div>
                            <div className="print-fields">{props.data_user?.user?.email}</div>
                        </div>
                        <br />
                        <div className="table-row">
                            <div className="table-field-1">Teléfono:</div>
                            <div className="print-fields">{props.data_user?.user?.telf}</div>
                        </div>
                        <br />
                        
                        <div className="user-logout-profile" onClick={() => logOut()}>LOGOUT</div>
                        <div className="button-update-open-section" onClick={() => panel_update_data_function()}>CAMBIAR DATOS</div>
                    </div>
                    { section_data_update ==true ?
                <div className="container-update-profile">
                    {/*<pre>{JSON.stringify(user, null, 2)}</pre> -- esto sirve para mostrar datos*/}
                    <div className="table-update">
                        <h2>Actualizar</h2>
                        <input className="input-form-update" type='text' name='name' title='name' onChange={userHandler} lenght='30' placeholder='Nombre' />
                        <br/>
                        <input className="input-form-update" type='email' name='email' title='email' onChange={userHandler} lenght='30' placeholder='Email' />
                        <br/>
                        <input className="input-form-update" type='text' name='telf' title='telf' onChange={userHandler} lenght='30' placeholder='Teléfono' />
                        <br/>
                        <div className="sendButton" onClick={() => update()}>Actualizar datos</div>
                        <div className="deleteButton" onClick={() => deleteuser()}>Borrar usuario</div>
                    </div>
                </div>
                :null
                }

                </div>


                    <div className="film-reserved">
                    <h2>Pelicula reservada</h2>
                    <table class="table-film-reserve">
                        <div>
                                <tr className="tabla-tr">
                                    <td className="td-one">Titulo:</td>
                                    <td className="td-two">{props?.data_film?.original_title}</td>     
                                </tr>
                                <tr className="tabla-tr">
                                    <td className="td-one">Resumen:</td>
                                    <td className="td-two">{props?.data_film?.overview}</td>
                                </tr>
                                <tr className="tabla-tr">
                                    <td className="td-one">Fecha publicación:</td>
                                    <td className="td-two">{props.data_film.release_date}</td>
                                </tr>
                        </div>
                        <div>
                        <img className="profile-image-films"src={`https://image.tmdb.org/t/p/original/${props?.data_film?.poster_path}`} />

                        </div>

                                

                                </table>
                    <div className="print-fields"><p></p></div> 
                </div>
                </div>
                </div>
             </div>


        )
    }
    else {
        return (
            <div className="designProfile">
                <div id="table-profile">
                    <h1>Datos personales</h1>
                    <div className="table-row">
                        <div className="table-field-1">Nombre:</div>

                        <div></div>
                    </div>

                    <br />
                    <div className="table-row">
                        <div className="table-field-1">Email:</div>
                        <div></div>
                    </div>
                    <br />
                    <div className="table-row">
                        <div className="table-field-1">Teléfono:</div>
                        <div></div>
                    </div>
                    <br />
                    <div className="table-row">
                        <div className="table-field-1">Id:</div>
                        <div></div>
                    </div>
                    <div className="user-logout" onClick={() => logIn()}>Login</div>
                </div>
            </div>
        )
    }


};


export default connect((state) => ({
    data_user: state.data_user,
    data_film: state.data_film,
}))(Profile);
