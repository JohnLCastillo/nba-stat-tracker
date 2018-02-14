import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import {addFavorite} from '../actions/favorites'

export class addPlayers extends React.Component {
  render() {
    const players = this.props.protectedStats.map(player => (
      <div className='box' onClick={() =>  this.props.dispatch(addFavorite(player,this.props.currentUserId))} key={player.playerId}>{player.playerName} PPG:{player.pts}  AST:{player.ast}  REB:{player.reb}</div>
    ));
    return <div className="wrapper">{players}</div>;
  }
}

const mapStateToProps = state => {
  return {
    // players: state.protectedData.leagueDashPlayerStats.filter(player => player.pts <17).sort((a,b) => b-a).slice(0,20),
    protectedData: state.protectedData.data,
    protectedStats: state.protectedData.stats
      .filter(player => player.pts >= 17)
      .sort((a, b) => b.pts - a.pts)
      .slice(0, 30),
      currentUserId: state.auth.currentUser.id
  };
};

export default requiresLogin()(connect(mapStateToProps)(addPlayers));
