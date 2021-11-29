import {combineReducers} from 'redux';
import data_user from './data_user';
import data_film from './data_film';
import data_stadistics  from './data_stadistics';



const rootReducer = combineReducers({
    data_user, data_film, data_stadistics

});

export default rootReducer;