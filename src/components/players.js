import React from "react";
import { connect } from "react-redux";
import requiresLogin from "./requires-login";

export class Players extends React.Component {
  render() {
    if (this.props.protectedData[0]) {
      console.log(this.props.protectedStats[0].playerHeadlineStats[0]);
      return (
        <div className="player">
          <div className="playername">
            Player: {this.props.protectedData[0].fullName}
          </div>
          <div className="playerstats">
            PPG: {this.props.protectedStats[0].playerHeadlineStats[0].pts}
            AST:  {this.props.protectedStats[0].playerHeadlineStats[0].ast}
            REB: {this.props.protectedStats[0].playerHeadlineStats[0].reb}
          </div>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    protectedData: state.protectedData.data,
    protectedStats: state.protectedData.stats
  };
};

export default requiresLogin()(connect(mapStateToProps)(Players));
