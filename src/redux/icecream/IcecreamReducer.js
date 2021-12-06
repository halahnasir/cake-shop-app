import { BUY_ICECREAM } from './IcecreamType'

const icecreamState = {
    numOfIcecreams: 20
}

const icecreamReducer = (state = icecreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default: return state
    }
}

export default icecreamReducer;