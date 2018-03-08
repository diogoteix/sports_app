import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as seasonsActions from '../actions/seasonsActions';
import PropTypes from 'prop-types';
import React from 'react';


class seasonsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { season: '' };
    }

    onSelectSeason(e) {
        console.log('[onSelectSeason]', this.inputEl.value)
        this.setState({ season: this.inputEl.value });
    }

    componentWillMount() {
        this.props.seasonsActions.fetchSeasons();
    }

    renderData(item) {
        return <option value={item.id}>{item.name}</option>
    }

    render() {
        if (!this.props.selectedLeague) {
            return (
                <div>
                    Select a league
                </div>
            )
        } else if (!this.props.seasons.list || this.props.seasons.fetchingData) {
            return (
                <div>
                    Loading seasons...
                </div>
            )
        } else {
            return (
                <div className="">
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select</ControlLabel>
                        <FormControl
                            onChange={this.onSelectSeason.bind(this)}
                            inputRef={el => this.inputEl = el}
                            componentClass="select" placeholder="select">
                            <option value="">select</option>
                            {
                                this.props.seasons.list
                                    .filter((item) => {
                                        return item.league_id.toString() == this.props.selectedLeague;
                                    })
                                    .map((item, index) => {
                                        return (
                                            this.renderData(item)
                                        );
                                    })
                            }

                        </FormControl>
                    </FormGroup>
                </div>
            )
        }
    }
}

seasonsList.propTypes = {
    seasonsActions: PropTypes.object,
    seasons: PropTypes.object
};

function mapStateToProps(state) {
    return {
        seasons: state.seasons,
        selectedLeague: state.leagues.selectedLeague
    };
}

function mapDispatchToProps(dispatch) {
    return {
        seasonsActions: bindActionCreators(seasonsActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(seasonsList);