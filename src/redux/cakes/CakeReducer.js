// Reducers will be defined here

//Importing action type
import {BUY_CAKE} from './CakeType';

// We start off with 10 cakes in the shop/inventory
const cakeState = {
    numOfCakes: 10
}

//Reducer

const cakeReducer = (state = cakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

//To be able to use this reducer in a different file, we need to export it

export default cakeReducer;