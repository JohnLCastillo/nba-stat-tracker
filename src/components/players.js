import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
//fix no playerid in favs
export class Players extends React.Component {
  render() {
    // const currentFavorites = this.props.favs.map(player => (
    //   <div className='box'>{player.playerName} PPG:{player.pts}  AST:{player.ast}  REB:{player.reb}</div>
      console.log(this.props.favs);
      return (
        <div className="wrapper">
        {/* {currentFavorites} */}
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
