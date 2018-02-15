import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import {fetchFavorites} from '../actions/favorites';
//fix no playerid in favs
export class Players extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchFavorites(this.props.currentUserId));
  }
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
    favs: state.protectedData.favoritePlayers,
    currentUserId: state.auth.currentUser.id
  };
};

export default requiresLogin()(connect(mapStateToProps)(Players));
