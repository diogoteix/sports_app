import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as leagueTableActions from "../actions/leagueTableActions";
import PropTypes from "prop-types";
import React from "react";

class leagueStagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stage: "" };
  }

  onSelectStage(e) {
    console.log("[onSelectStage]", this.inputEl.value);
    this.setState({ stage: this.inputEl.value });
    this.props.leagueTableActions.selectStage(this.inputEl.value);
    //this.props.leagueTableActions.fetchLeagueTable(this.inputEl.value);
  }

  renderData(item, index) {
    return (
      <option key={index} value={item.stage_id}>
        {item.stage_name}
      </option>
    );
  }

  render() {
    if (!this.props.selectedSeason) {
      return <div>Select a season</div>;
    } else if (
      !this.props.leagueTable.stagesList ||
      this.props.leagueTable.fetchingData
    ) {
      return <div>Loading stages...</div>;
    } else {
      return (
        <div className="">
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Stages</ControlLabel>
            <FormControl
              onChange={this.onSelectStage.bind(this)}
              inputRef={el => (this.inputEl = el)}
              componentClass="select"
              placeholder="select"
            >
              <option value="">select</option>
              {this.props.leagueTable.stagesList.map((item, index) => {
                return this.renderData(item, index);
              })}
            </FormControl>
          </FormGroup>
        </div>
      );
    }
  }
}

leagueStagesList.propTypes = {
  leagueTableActions: PropTypes.object,
  leagueTable: PropTypes.object
};

function mapStateToProps(state) {
  return {
    leagueTable: state.leagueTable,
    selectedSeason: state.seasons.selectedSeason
  };
}

function mapDispatchToProps(dispatch) {
  return {
    leagueTableActions: bindActionCreators(leagueTableActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(leagueStagesList);
