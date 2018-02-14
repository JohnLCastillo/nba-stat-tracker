import React from 'react';
import {connect} from 'react-redux';
import {dialogOn, dialogOff, clearAuth} from '../actions/auth';
let timer;
let secondTimer;

export class Activity extends React.Component {
    startTimer() {
        timer = setTimeout(()=>this.props.dispatch(clearAuth()), 60000);
        secondTimer = setTimeout(()=>this.props.dispatch(dialogOn()), 50000);
    }

    restartTimer() {
        window.clearTimeout(timer);
        window.clearTimeout(secondTimer);
        this.startTimer();
    }

    componentDidMount() {
        this.startTimer();
        window.addEventListener('click', () => {
            this.props.dispatch(dialogOff());
            this.restartTimer();
        })
    }

    render() {
        if(this.props.loggedIn) {
            this.restartTimer();
            if(this.props.dialog) {
                return (
                    <div className='dialog'>
                        <div onClick={() => {
                            this.props.dispatch(dialogOff());
                            this.restartTimer();
                        }}>
                        You will be logged out in a minute unless you click anywhere on the page
                        </div>
                    </div>
                );
            }
        }
        return (
            <p></p>
        );
    }
}

const mapStatetoProps = state => ({
    dialog: state.auth.dialog,
    loggedIn: state.auth.currentUser !== null
})

export default connect(mapStatetoProps)(Activity)