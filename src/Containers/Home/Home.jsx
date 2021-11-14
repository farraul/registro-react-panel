import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const history = useNavigate();

    const [msgError, setmsgError] = useState("");
    const [datosperfil, setDatosPerfil] = useState("");
    const [credentials, setCredentials] = useState({peli:''});
    const [films, setfilms]= useState("");
    const [filmfound, setfilmfound]  = useState("");


    useEffect(() => {
        bringfilms (); 
        datauser();


    }, []);


    let arr = ['pepe','maria','ramon','gutavo']
 

 
    const bringfilms = async () => {
        let res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=51c1099989a6923f3d12154210fc2cf7&language=en-US&page=1");
        setfilms(res.data.results);
        console.log("datos de pelis",res.data.results);      
        
};




    const writefilm = (e) =>{
  
        setCredentials( e.target.value );

        let film= credentials;
        console.log("cred", credentials)
      

         const filtered = films.filter( word => {
            //return word.toLowerCase().match(films.toLowerCase())
            console.log("word", word.original_title);
            console.log("film: ", film);
            console.log("word.original_title:", word.original_title)
         
           return word.original_title.match(film);

           
          })
          console.log("filtered2:",filtered)
          const setfilmfound=filtered;
          //const container = document.getElementById('solutions')
          //container.innerHTML= filtered


        /*filtered.map((peli) => {

             //container.innerHTML= "o";
             console.log("ho:",peli.original_title);
             
            let container = document.getElementById('solutions');
          container.innerHTML= peli.original_title;
             
              
         

        })*/

    }

    


    const datauser = async () => {
        try {
            let res = await axios.get("https://app-movies-mongoose.herokuapp.com/usuario/");
            setDatosPerfil(res.data);
            console.log("res: ", res)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        
        <div className='container-home pt-2'>
            <div>
                <h1 className='h1-home mt-2'>Tu plataforma de peliculas</h1>
                <div className="container-buscador">
                    
                    <input className="imput-search" type="text" name="film" onChange={writefilm} title="film" lenght="30" placeholder="Escribe pelicula"/>
                    <div id="solutions" className="container-equals-films">
                    
       {/*  {[filmfound].map((peli) => {
           return (
            <div className="peli">
            </div>
            )
         }) */}
 
         } 
        
         
          
 






                    </div>
                </div>

                <p className="text-center mt-10">últimos usuarios registrados </p>
                

                { datosperfil.length > 0 &&
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
    )

return(
    <div style={{color: 'red'}}>asfdsf</div>
)


{/*}
let arr = ['adios', 'hola', 'uno', 'dos', 'tres']

const search = 'no'
search =()=>{

const filtered = arr.filter( word => {
  return word.toLowerCase().match(search.toLowerCase())
})

const container = document.getElementById('solutions')
container.innerHTML = filtered

console.log(container)
}



    <div>holaa</div>
    <div className="" onClick={() => search()}>Login</div>

*/}



};

export default Home;