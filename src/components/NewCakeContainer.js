import React, {useState} from 'react';
import buyCake from '../redux/cakes/CakeActions'
import {connect} from 'react-redux';

//Define these function
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: (number) => dispatch(buyCake(number))
    }
}

//Component 

const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1);
    return(
        <div>
            <h2>Number of Cakes: {props.numOfCakes}</h2>
            <input type = 'text' value = {number} onChange = {(e) => setNumber(e.target.value)} />
            <button onClick = {() => props.buyCake(number)}>Buy {number} Cakes</button>
        </div>
    )
}

//Connect these functions with the component
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);

//Connect() --> old way, now we use hooks to subscribe to the store and dispatch actions without using connect()