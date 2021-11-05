
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';

const Home = () => {
    return (
        <div>
            soy Home


            <div className="botonSend" onClick={() => enviaDatosRegistro()}>Registrame</div>
        </div>
    )
};

export default Home;