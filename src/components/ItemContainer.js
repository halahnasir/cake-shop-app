import React from 'react';
import {connect} from 'react-redux';
import buyCake from '../redux/cakes/CakeActions';
import buyIcecream from '../redux/icecream/IcecreamAction';

const ItemContainer = (props) => {
    return (
        <div>
            <h2>Item: {props.item}</h2>
            <button onClick = {props.dispatchAction}>Buy</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes
                                    : state.icecream.numOfIcecreams

    return{
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   const dispatchFunction = ownProps.cake ? () => dispatch(buyCake())
                                        : () => dispatch(buyIcecream())
    
    return{
        dispatchAction : dispatchFunction
    }

}

//When you want to dispatch actions only and not subscribe to the state changes in the redux store, pass null as the first argument in the connect function in place of mapStateToProps

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
