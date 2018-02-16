import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import {addFavorite,filterInput} from '../actions/favorites';

export class addPlayers extends React.Component {
  repeats(playerId,userId) {
    let found = this.props.currentUser.favorites.filter(id => id === playerId)
    if(!found[0]){
      this.props.dispatch(addFavorite(playerId,userId));
    }
  }
  render() { 
    const players = this.props.protectedStats.map(player => (
      <div className='box' onClick={() =>  
        this.repeats(player.playerId,this.props.currentUserId)}
       key={player.playerId}>
      {player.playerName} <br/> PPG:{player.pts} <br/> AST:{player.ast} <br/> REB:{player.reb}
      </div>
    ));
    console.log(this.props.protectedFilter)
    return (
      <div>
        <div className='dashboard-button'>
        <button onClick={() => this.props.history.push('/dashboard')}>Dashboard</button>;
        <input type='text' onChange={val => this.props.dispatch(filterInput(val))}/>
        </div>
        <br/>
        <div className="wrapper">{players}</div>;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      protectedStats: state.protectedData.allStats
      .filter(player => player.pts >= 17)
      .sort((a, b) => b.pts - a.pts)
      .slice(0, 24),
      protectedFilter: state.protectedData.filteredNames,
      currentUserId: state.auth.currentUser.id,
      currentUser: state.auth.currentUser
  };
};

export default requiresLogin()(connect(mapStateToProps)(addPlayers));
