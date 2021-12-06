import { createStore, combineReducers } from 'redux';
import cakeReducer from './cakes/CakeReducer';
import icecreamReducer from './icecream/IcecreamReducer';

//Comibing Reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store = createStore(rootReducer);

export default store;