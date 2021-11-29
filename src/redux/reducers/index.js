import {combineReducers} from 'redux';
import data_user from './data_user';
import data_film from './data_film';
import data_estad from './data_estad';



const rootReducer = combineReducers({
    data_user, data_film, data_estad 

});

export default rootReducer;