import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/UserActions';

const UserContainer = ({userData, fetchUserData}) => {
    useEffect(() => {
        fetchUserData()
    }, [])
    return userData.loading 
    ? (<h2>Loading</h2>) 
    : userData.error 
    ? (<h2>{userData.error}</h2>) 
    : (<div>
        <h2>User List</h2>
        {
            userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
        }
        </div>)
}

const mapStateToProps = (state) => {
    return{
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUserData: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
