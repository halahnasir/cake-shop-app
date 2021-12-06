import {BUY_COOKIES} from './CookiesType';

const cookiesState = {
    numOfCookies: 30
}

const cookiesReducer = (state = cookiesState, action) => {
    switch(action.type){
        case BUY_COOKIES: return{
            ...state,
            numOfCookies: state.numOfCookies - 1
        }
        default: return state
    }
}

export default cookiesReducer;
