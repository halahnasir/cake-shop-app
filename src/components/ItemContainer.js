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



export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
