import {TAKE_ESTAD} from '../types';

const initialState = {
    saludo : '',
  
};

const data_estad = (state = initialState, action) => {
    
    switch(action.type){
        //Ejemplo de añadido de datos
        case TAKE_ESTAD :
            return action.payload;
        default :
            return state
    }
}
export default data_estad;