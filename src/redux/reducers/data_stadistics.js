import { TAKE_STADISTICS} from '../types';

const initialState = {
    film : ''
  
};

const data_stadistics = (state = initialState, action) => {
    
    switch(action.type){
        //Ejemplo de añadido de datos
        case TAKE_STADISTICS :
            return action.payload;

        default :
            return state
    }
}
export default data_stadistics;