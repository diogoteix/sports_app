import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as leagueTableActions from '../actions/leagueTableActions';
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
        this.state = { season: '' };
    }

    getStandingsSelectedPhase() {
        var phase = this.props.leagueTable.stagesList.find((obj) => {
            return obj.stage_id.toString() === this.props.leagueTable.selectedStage;
        });

        return phase.standings.data;
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
                        data={this.getStandingsSelectedPhase()}
                        columns={columns}
                        showPagination={false}
                        minRows={0}
                    />
                </div>
            )
        }
    }
}

leagueTable.propTypes = {
    leagueTableActions: PropTypes.object,
    leagueTable: PropTypes.object
};

function mapStateToProps(state) {
    return {
        leagueTable: state.leagueTable,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        leagueTableActions: bindActionCreators(leagueTableActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(leagueTable);