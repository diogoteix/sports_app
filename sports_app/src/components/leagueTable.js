import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as leagueTableActions from '../actions/leagueTableActions';
import * as teamActions from '../actions/teamActions';
import PropTypes from 'prop-types';
import React from 'react';
import ReactTable from 'react-table';

const columns = [{
    Header: 'Position',
    accessor: 'position' // String-based value accessors!
}, {
    Header: 'Name',
    accessor: 'team_name',
}, {
    Header: 'Played',
    id: 'played',
    accessor: t => t.overall.games_played
}, {
    Header: 'Won',
    id: 'won',
    accessor: t => t.overall.won
}, {
    Header: 'Draw',
    id: 'draw',
    accessor: t => t.overall.draw
}, {
    Header: 'Lost',
    id: 'lost',
    accessor: t => t.overall.lost
}, {
    Header: 'Goal',
    id: 'goal',
    accessor: t => t.overall.goals_scored + " - " + t.overall.goals_against
}, {
    Header: 'Difference',
    id: 'difference',
    accessor: t => t.total.goal_difference
}, {
    Header: 'Points',
    id: 'points',
    accessor: t => t.total.points
}];

class leagueTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            season: '',
            stage: this.getStandingsSelectedPhase(props.leagueTable.stagesList, props.leagueTable.selectedStage)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            stage: this.getStandingsSelectedPhase(nextProps.leagueTable.stagesList, nextProps.leagueTable.selectedStage)
        })
    }

    getStandingsSelectedPhase(stagesList, selectedStage) {
        if (selectedStage) {
            var phase = stagesList.find((obj) => {
                return obj.stage_id.toString() === selectedStage;
            });

            return phase;
        } else {
            return null;
        }
    }

    renderData(item) {
        return <option value={item.team_id}>{item.team_name}</option>
    }

    render() {
        if (!this.props.leagueTable.selectedStage) {
            return (
                <div>
                    Select a league
                </div>
            )
        } else if (!this.props.leagueTable.stagesList || this.props.leagueTable.fetchingData) {
            return (
                <div>
                    Loading leagueTable...
                </div>
            )
        } else {
            return (
                <div className="">
                    <ReactTable
                        data={this.state.stage.standings.data}
                        columns={columns}
                        showPagination={false}
                        minRows={0}
                        getTdProps={(state, rowInfo, column, instance) => {
                            return {
                                onClick: (e, handleOriginal) => {
                                    console.log('It was in this row:', rowInfo.original.team_id)
                                    this.props.teamActions.selectTeam(rowInfo.original.team_id)
                                    this.props.teamActions.fetchTeam(rowInfo.original.team_id)
                                    this.props.teamActions.fetchTeamPlayers(rowInfo.original.team_id, this.state.stage.season_id)
                                }
                            }
                        }}
                    />
                </div>
            )
        }
    }
}

leagueTable.propTypes = {
    leagueTableActions: PropTypes.object,
    teamActions: PropTypes.object,
    leagueTable: PropTypes.object
};

function mapStateToProps(state) {
    return {
        leagueTable: state.leagueTable,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        leagueTableActions: bindActionCreators(leagueTableActions, dispatch),
        teamActions: bindActionCreators(teamActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(leagueTable);