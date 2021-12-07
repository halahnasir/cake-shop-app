import { combineReducers } from 'redux';
import cakeReducer from './cakes/CakeReducer';
import cookiesReducer from './cookies/CookiesReducer';
import icecreamReducer from './icecream/IcecreamReducer';
import reducer from './user/UserReducers';

//Comibing Reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    cookies: cookiesReducer, 
    user: reducer
})

export default rootReducer;