import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import LeaguesList from './components/leaguesList';
import SeasonsList from './components/seasonsList';
import LeagueStagesList from './components/leagueStagesList';
import LeagueTable from './components/leagueTable';

class App extends Component {
    render() {
        return (
            <div className="app">
                <PageHeader>
                    Example page header <small>Subtext for header</small>
                </PageHeader>
                <div class="container">
                    <div class="row">
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