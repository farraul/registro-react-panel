import {combineReducers} from 'redux';
import data_user from './data_user';
import data_film from './data_film';



const rootReducer = combineReducers({
    data_user, data_film

});

export default rootReducer;