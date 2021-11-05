
import React from 'react';
import { useNavigate } from 'react-router-dom';


import './Home.css';

const Home = () => {
    const history = useNavigate();
    //const login = () => {
     //history("/login");
       //<div className="botonSend" onClick={() => login()}>Registrame</div>
    //}

    return (
        <div>
            

            <div>
           <p>Home</p>
            </div>
        </div>


    )
};

export default Home;