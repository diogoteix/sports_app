import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as teamActions from "../actions/teamActions";
import PropTypes from "prop-types";
import React from "react";

class teamModalPositionPlayers extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.positionName}</h4>
        <div class="row">
          {this.props.players
            .filter(player => {
              return player.position_id === this.props.positionId;
            })
            .map((player, index) => {
              return (
                <div
                  key={index}
                  className="col-xs-4 player"
                  onClick={() =>
                    this.props.teamActions.selectPlayer(player.player_id)
                  }
                >
                  <img
                    src={player.player.data.image_path}
                    alt={player.player.data.common_name}
                  />
                  <span>{player.player.data.common_name}</span>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

teamModalPositionPlayers.propTypes = {
  teamActions: PropTypes.object,
  players: PropTypes.array,
  positionId: PropTypes.integer,
  positionName: PropTypes.string
};

function mapStateToProps(state) {
  return {
    team: state.team
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teamActions: bindActionCreators(teamActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  teamModalPositionPlayers
);
