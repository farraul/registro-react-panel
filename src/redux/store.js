import {applyMiddleware, createStore} from 'redux';
import { save, load } from "redux-localstorage-simple";
import reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
	//save({ states: ["data_user'","data_film","data_estad"] })

    	save({ states: ["data_user" , "data_film","data_estad"]  })



)(createStore);

const store = createStoreWithMiddleware(
    reducer,
    //load({ states: ["data_user", "data_film","data_estad"]}),
    load({ states: ["data_user" , "data_film","data_estad"] }),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    })
);

export default store;