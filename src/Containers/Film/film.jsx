
import React, { useState, useEffect } from 'react';


const Film = () => {

    const [peli, setPeli] = useState(JSON.parse(localStorage.getItem("choosenFilm")));

    useEffect(() => {
        console.log(peli);
    }, []);

    const order = () => {
        console.log("la id de la peli que voy a pedir es......",peli.id);
    }

    return (
        <div className="profilePelicula">
            <div>{peli.original_title}</div>
            <div><img alt={peli.id} className="cartel"src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`} />
            </div>
            <div>{peli.release_date}</div>
            <div>{peli.overview}</div>
            <button onClick={()=> order()}>ALQUILAR LA PELICULA</button>
        </div>
    )
}

export default Film;