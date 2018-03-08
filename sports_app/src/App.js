import React, { Component } from 'react';
import LeaguesList from './components/leaguesList';
import SeasonsList from './components/seasonsList';

class App extends Component {
    render() {
        return (
            <div className="app">
                <LeaguesList />
                <SeasonsList />
            </div>
        );
    }
}

export default App;