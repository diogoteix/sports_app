import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as leaguesActions from '../actions/leaguesActions';
import PropTypes from 'prop-types';
import React from 'react';


class leaguesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { league: '' };
    }

    onSelectLeague(e) {
        console.log('[onSelectLeague]', this.inputEl.value)
        this.setState({ league: this.inputEl.value });
    }

    componentWillMount() {
        this.props.leaguesActions.fetchLeagues();
    }

    renderData(item) {
        return <option value={item.id}>{item.name}</option>
    }

    render() {
        if (!this.props.leagues) {
            return (
                <div>
                    Loading leagues...
                </div>
            )
        } else {
            return (
                <div className="">
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select</ControlLabel>
                        <FormControl
                            onChange={this.onPickColor.bind(this)}
                            inputRef={el => this.inputEl = el}
                            componentClass="select" placeholder="select">
                            <option value="">select</option>
                            {
                                this.props.leagues.map((item, index) => {
                                    return (
                                        this.renderData(item)
                                    );
                                })
                            }

                        </FormControl>
                    </FormGroup>
                    {
                        this.props.leagues.map((item, index) => {
                            return (
                                this.renderData(item)
                            );
                        })
                    }
                </div>
            )
        }
    }
}

leaguesList.propTypes = {
    leaguesActions: PropTypes.object,
    leagues: PropTypes.array
};

function mapStateToProps(state) {
    return {
        leagues: state.leagues
    };
}

function mapDispatchToProps(dispatch) {
    return {
        leaguesActions: bindActionCreators(leaguesActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(leaguesList);