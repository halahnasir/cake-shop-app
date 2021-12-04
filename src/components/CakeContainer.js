import React from 'react';
import buyCake from '../redux/cakes/CakeActions'
import {connect} from 'react-redux';

//Define these function
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}

//Component 

const CakeContainer = (props) => {
    return(
        <div>
            <h2>Number of Cakes: {props.numOfCakes}</h2>
            <button onClick = {props.buyCake}>Buy Cake</button>
        </div>
    )
}

//Connect these functions with the component
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

//Connect() --> old way, now we use hooks to subscribe to the store and dispatch actions without using connect()