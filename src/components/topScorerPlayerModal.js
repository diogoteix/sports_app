import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as leagueTableActions from "../actions/leagueTableActions";
import PropTypes from "prop-types";
import React from "react";

class topScorerPlayerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: props.leagueTable.player
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      player: nextProps.leagueTable.player
    });
  }

  render() {
    if (
      !this.props.leagueTable.player ||
      !this.props.leagueTable.selectedPlayer ||
      this.props.leagueTable.fetchingTopScorersPlayer
    ) {
      return <div />;
    } else {
      return (
        <Modal
          show={true}
          onHide={() => {
            this.props.leagueTableActions.selectTopScorerPlayer(null);
          }}
          className="player-selected"
        >
          <Modal.Header closeButton>
            <img
              src={this.state.player.image_path}
              alt={this.state.player.common_name}
              className="logo"
            />
            <span className="player-name">{this.state.player.common_name}</span>
          </Modal.Header>
          <Modal.Body>
            <h4>Profile</h4>
            <div className="row">
              <div className="col-xs-4">
                <span className="title">First Name</span>
                <span className="text">{this.state.player.firstname}</span>
              </div>
              <div className="col-xs-4">
                <span className="title">Last Name</span>
                <span className="text">{this.state.player.lastname}</span>
              </div>
              <div className="col-xs-4">
                <span className="title">Full Name</span>
                <span className="text">{this.state.player.fullname}</span>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                <span className="title">Nationality</span>
                <span className="text">{this.state.player.nationality}</span>
              </div>
              <div className="col-xs-4">
                <span className="title">Height</span>
                <span className="text">{this.state.player.height}</span>
              </div>
              <div className="col-xs-4">
                <span className="title">Weight</span>
                <span className="text">{this.state.player.weight}</span>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-4">
                <span className="title">Birth Date</span>
                <span className="text">{this.state.player.birthdate}</span>
              </div>
              <div className="col-xs-4">
                <span className="title">Birth Country</span>
                <span className="text">{this.state.player.birthcountry}</span>
              </div>
              <div className="col-xs-4">
                <span className="title">Birth Place</span>
                <span className="text">{this.state.player.birthplace}</span>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.props.leagueTableActions.selectTopScorerPlayer(null);
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

topScorerPlayerModal.propTypes = {
  leagueTableActions: PropTypes.object,
  leagueTable: PropTypes.object
};

function mapStateToProps(state) {
  return {
    leagueTable: state.leagueTable
  };
}

function mapDispatchToProps(dispatch) {
  return {
    leagueTableActions: bindActionCreators(leagueTableActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  topScorerPlayerModal
);
