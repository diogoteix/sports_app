import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as leaguesActions from "../actions/leaguesActions";
import * as seasonsActions from "../actions/seasonsActions";
import PropTypes from "prop-types";
import React from "react";

class leaguesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { league: "" };
  }

  onSelectLeague(e) {
    console.log("[onSelectLeague]", this.inputEl.value);
    this.setState({ league: this.inputEl.value });
    if (this.state.league !== "") {
      this.props.seasonsActions.selectSeason(null);
    }
    this.props.leaguesActions.selectLeague(this.inputEl.value);
  }

  componentWillMount() {
    this.props.leaguesActions.fetchLeagues();
  }

  renderData(item, index) {
    return (
      <option key={index} value={item.id}>
        {item.name}
      </option>
    );
  }

  render() {
    if (!this.props.leagues.list || this.props.leagues.fetchingData) {
      return <div>Loading leagues...</div>;
    } else {
      return (
        <div className="">
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Leagues</ControlLabel>
            <FormControl
              onChange={this.onSelectLeague.bind(this)}
              inputRef={el => (this.inputEl = el)}
              componentClass="select"
              placeholder="select"
            >
              <option value="">select</option>
              {this.props.leagues.list.map((item, index) => {
                return this.renderData(item, index);
              })}
            </FormControl>
          </FormGroup>
        </div>
      );
    }
  }
}

leaguesList.propTypes = {
  leaguesActions: PropTypes.object,
  leagues: PropTypes.object
};

function mapStateToProps(state) {
  return {
    leagues: state.leagues
  };
}

function mapDispatchToProps(dispatch) {
  return {
    leaguesActions: bindActionCreators(leaguesActions, dispatch),
    seasonsActions: bindActionCreators(seasonsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(leaguesList);
