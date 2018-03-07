import React, { Component } from 'react';
import LeaguesList from './components/leaguesList';

class App extends Component {
    render() {
        return (
            <div className="app">
                <LeaguesList />
            </div>
        );
    }
}

export default App;