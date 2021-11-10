import {LOGIN, LOGOUT} from '../types';

const initialState = {
    token : '',
    user : {} //ponia usuario
};

const data_user = (state = initialState, action) => {
    
    switch(action.type){
        //Ejemplo de añadido de datos
        case LOGIN :
            return action.payload;

        //Ejemplo de reestablecimiento o borrado de datos
        case LOGOUT : 
            return initialState;
            
        default :
            return state
    }
}
export default data_user;