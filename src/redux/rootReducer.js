import { combineReducers } from 'redux';
import cakeReducer from './cakes/CakeReducer';
import cookiesReducer from './cookies/CookiesReducer';
import icecreamReducer from './icecream/IcecreamReducer';

//Comibing Reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    cookies: cookiesReducer
})

export default rootReducer;