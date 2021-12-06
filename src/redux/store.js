import { createStore, combineReducers } from 'redux';
import cakeReducer from './cakes/CakeReducer';
import icecreamReducer from './icecream/IcecreamReducer';

//Comibing Reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecCrem: icecreamReducer
})

const store = createStore(cakeReducer);

export default store;