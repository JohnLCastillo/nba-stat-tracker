import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";
import { fetchFavorites } from "../actions/favorites";
import { deleteFavorite } from "../actions/delete";

export class Players extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchFavorites(this.props.currentUserId));
  }
  render() {
    const currentFavorites = this.props.favs.map(player => (
      <div className="box" key={player.playerId}>
        {player.playerName} <br /> PPG:{player.pts} <br /> AST:{player.ast}
        <br /> REB:{player.reb}
        <br />
        <img
          onClick={() =>
            this.props.dispatch(
              deleteFavorite(this.props.currentUserId, player.playerId)
            )
          }
          alt="trash"
          src="https://www.materialui.co/materialIcons/action/delete_grey_24x24.png"
          height="20"
          width="20"
        />
      </div>
    ));
    console.log(this.props.favs);
    return (
      <div>
        <br />
        <div className="wrapper">{currentFavorites}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favs: (state.protectedData.favoritePlayers.stats || []).map(
      player => player.playerHeadlineStats[0]
    ),
    currentUserId: state.auth.currentUser.id
  };
};

export default requiresLogin()(connect(mapStateToProps)(Players));
