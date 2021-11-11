import {LOGIN, LOGOUT, UPDATE_USER} from '../types';

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
            
        case UPDATE_USER:
            return{ ...state, user: action.payload}; //emn user metes en este caso el body
        default :
            return state
    }
}
export default data_user;