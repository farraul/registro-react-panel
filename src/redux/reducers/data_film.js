import {TAKE_FILM} from '../types';

const initialState = {
    film : ''
  
};

const data_film = (state = initialState, action) => {
    
    switch(action.type){
        //Ejemplo de añadido de datos
        case TAKE_FILM :
            return action.payload;

        default :
            return state
    }
}
export default data_film;