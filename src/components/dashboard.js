import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import Players from './players';
import {Link, Redirect} from 'react-router-dom';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <Link to="/addplayer" onClick={() => <Redirect to="/addplayer"/>}>Add to your Favorites</Link>
                {/* <Players /> */}
                <br/>
                <img src='https://lh4.googleusercontent.com/-KjQiJwB8Sfk/TtTv9lVVQCI/AAAAAAAAAjI/yRUefs-EKHE/w506-h750/ChrisPaul350.png' alt='' height="182" width="232"/>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
