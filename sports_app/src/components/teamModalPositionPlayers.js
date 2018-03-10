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
            .map(player => {
              return (
                <div class="col-xs-4 player">
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
  players: PropTypes.array,
  positionId: PropTypes.integer,
  positionName: PropTypes.string
};

export default teamModalPositionPlayers;
