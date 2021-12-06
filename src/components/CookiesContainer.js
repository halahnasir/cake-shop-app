import React from 'react';
import { connect } from 'react-redux';
import buyCookies from '../redux/cookies/CookiesAction';

const CookiesContainer = (props) => {
    return(
        <div>
            <h2>Number Of Cookies: {props.numOfCookies}</h2>
            <button onClick = {props.buyCookies}>Buy Cookies</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numOfCookies: state.cookies.numOfCookies
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCookies: () => dispatch(buyCookies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CookiesContainer);