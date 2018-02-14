import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";

export class addPlayers extends React.Component {
  render() {
      console.log(this.props.protectedStats)
      const players = this.props.protectedStats.map(player => <li key={player.playerId}>{player.playerName}</li>);
    // if (this.props.protectedData[0]) {
    //   console.log(this.props.protectedStats[0].playerHeadlineStats[0]);
      return (
        <ul className="playera">
        {players}
        </ul>
      )}
}

const mapStateToProps = state => {
  return {
    // players: state.protectedData.leagueDashPlayerStats.filter(player => player.pts <17).sort((a,b) => b-a).slice(0,20),
    protectedData: state.protectedData.data,
    protectedStats: state.protectedData.stats.filter(player => player.pts >= 17).sort((a,b) => b.pts-a.pts).slice(0,20)
  };
};

export default requiresLogin()(connect(mapStateToProps)(addPlayers));