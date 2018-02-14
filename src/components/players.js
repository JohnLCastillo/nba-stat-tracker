import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";

export class Players extends React.Component {
  render() {
    // const currentFavorites = this.props.favs.map(player => (
    //   <div className='box' key={player.playerId}>{player.playerName} PPG:{player.pts}  AST:{player.ast}  REB:{player.reb}</div>
      console.log(this.props.favs);
      return (
        <div className="player">
          <div className="playername">
            Player: {this.props.favs.fullName}
          </div>
          <div className="playerstats">
            {/* PPG: {this.props.protectedStats[0].playerHeadlineStats[0].pts}
            AST:  {this.props.protectedStats[0].playerHeadlineStats[0].ast}
            REB: {this.props.protectedStats[0].playerHeadlineStats[0].reb} */}
          </div>
        </div>
      ); 
  }
}

const mapStateToProps = state => {
  return {
    favs: state.auth.currentUser.favorites
  };
};

export default requiresLogin()(connect(mapStateToProps)(Players));
