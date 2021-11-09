import React from 'react';



import { useNavigate } from 'react-router-dom';

const Boton = (props) => {

    const history = useNavigate();

    const llevame = () => {
        history(props.url);
    }

    console.log("props: ", props);
    return (
        <div className="designBoton" onClick={()=>llevame()}>{props.destino}</div>
        
    )
};

export default Boton;