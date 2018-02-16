import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import Players from './players';
import {Link} from 'react-router-dom';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        
        return (
            <div className="dashboard">
                <Link to="/addplayer">Add to your Favorites</Link>
                <br/>
                <Players />
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        username: state.auth.currentUser.username
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
