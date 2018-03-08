import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import LeaguesList from './components/leaguesList';
import SeasonsList from './components/seasonsList';
import LeagueStagesList from './components/leagueStagesList';
import LeagueTable from './components/leagueTable';
import player from './images/player.svg';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div class="page-header">
                    <img src={player} class="icon" alt="Player" />
                    <h1>Soccer App</h1>
                </div>
                <div class="container">
                    <div class="row select-box-area">
                        <div class="col-xs-4">
                            <LeaguesList />
                        </div>
                        <div class="col-xs-4">
                            <SeasonsList />
                        </div>
                        <div class="col-xs-4">
                            <LeagueStagesList />
                        </div>
                    </div>
                    <LeagueTable />
                </div>
            </div>
        );
    }
}

export default App;