import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as teamActions from "../actions/teamActions";
import PropTypes from "prop-types";
import React from "react";

class playerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.getPlayer(props.team.selectedPlayer, props.team.teamPlayers)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      player: this.getPlayer(
        nextProps.team.selectedPlayer,
        nextProps.team.teamPlayers
      )
    });
  }

  getPlayer(playerId, players) {
    if (playerId) {
      return players.find(p => {
        return p.player_id === playerId;
      });
    } else {
      return null;
    }
  }

  render() {
    if (!this.props.team.selectedPlayer) {
      return <div />;
    } else {
      return (
        <Modal
          show={true}
          onHide={() => {
            this.props.teamActions.selectPlayer(null);
          }}
          className="player-selected"
        >
          <Modal.Header closeButton>
            <img
              src={this.state.player.player.data.image_path}
              alt={this.state.player.player.data.common_name}
              className="logo"
            />
            <span className="player-name">
              {this.state.player.player.data.common_name}
            </span>
          </Modal.Header>
          <Modal.Body>
            <h4>Profile</h4>
            <div className="row">
              <div className="col-xs-4">
                <span className="title">First Name</span>
                <span className="text">
                  {this.state.player.player.data.firstname}
                </span>
              </div>
              <div className="col-xs-4">
                <span className="title">Last Name</span>
                <span className="text">
                  {this.state.player.player.data.lastname}
                </span>
              </div>
              <div className="col-xs-4">
                <span className="title">Full Name</span>
                <span className="text">
                  {this.state.player.player.data.fullname}
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                <span className="title">Nationality</span>
                <span className="text">
                  {this.state.player.player.data.nationality}
                </span>
              </div>
              <div className="col-xs-4">
                <span className="title">Height</span>
                <span className="text">
                  {this.state.player.player.data.height}
                </span>
              </div>
              <div className="col-xs-4">
                <span className="title">Weight</span>
                <span className="text">
                  {this.state.player.player.data.weight}
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                <span className="title">Birth Date</span>
                <span className="text">
                  {this.state.player.player.data.birthdate}
                </span>
              </div>
              <div className="col-xs-4">
                <span className="title">Birth Country</span>
                <span className="text">
                  {this.state.player.player.data.birthcountry}
                </span>
              </div>
              <div className="col-xs-4">
                <span className="title">Birth Place</span>
                <span className="text">
                  {this.state.player.player.data.birthplace}
                </span>
              </div>
            </div>

            <h4>Stats</h4>
            <div className="row">
              <div className="col-xs-4">
                <span className="title">Number</span>
                <span className="text">{this.state.player.number}</span>
              </div>
              <div className="col-xs-4">
                <span className="title">Appearences</span>
                <span className="text">{this.state.player.appearences}</span>
              </div>
              <div className="col-xs-4">
                <span className="title">Minutes Played</span>
                <span className="text">{this.state.player.minutes}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <span className="title">Goals</span>
                <span className="text">{this.state.player.goals}</span>
              </div>
              <div className="col-xs-4">
                <span className="title">Assists</span>
                <span className="text">{this.state.player.assists}</span>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                <span className="title">Yellow Cards</span>
                <span className="text">{this.state.player.yellowcards}</span>
              </div>
              <div className="col-xs-4">
                <span className="title">Double Yellow Cards</span>
                <span className="text">{this.state.player.yellowred}</span>
              </div>
              <div className="col-xs-4">
                <span className="title">Red Cards</span>
                <span className="text">{this.state.player.redcards}</span>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.props.teamActions.selectPlayer(null);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
}

playerModal.propTypes = {
  teamActions: PropTypes.object,
  team: PropTypes.object
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

export default connect(mapStateToProps, mapDispatchToProps)(playerModal);
