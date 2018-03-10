import React, { Component } from "react";
import LeaguesList from "./components/leaguesList";
import SeasonsList from "./components/seasonsList";
import LeagueStagesList from "./components/leagueStagesList";
import LeagueTable from "./components/leagueTable";
import TeamModal from "./components/teamModal";
import PlayerModal from "./components/playerModal";
import TopScorerPlayerModal from "./components/topScorerPlayerModal";
import player from "./images/player.svg";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="page-header">
          <img src={player} className="icon" alt="Player" />
          <h1>Soccer App</h1>
        </div>
        <div className="container">
          <div className="row select-box-area">
            <div className="col-xs-4">
              <LeaguesList />
            </div>
            <div className="col-xs-4">
              <SeasonsList />
            </div>
            <div className="col-xs-4">
              <LeagueStagesList />
            </div>
          </div>
          <LeagueTable />
          <TeamModal />
          <PlayerModal />
          <TopScorerPlayerModal />
        </div>
      </div>
    );
  }
}

export default App;
