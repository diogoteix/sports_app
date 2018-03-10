export default {
  leagues: {
    fetchingData: false,
    list: [],
    selectedLeague: null
  },
  seasons: {
    fetchingData: false,
    list: [],
    selectedSeason: null
  },
  leagueTable: {
    fetchingData: false,
    fetchingTopScorers: false,
    fetchingTopScorersPlayer: false,
    stagesList: [],
    selectedStage: null,
    topScorers: [],
    selectedPlayer: null,
    player: null
  },
  team: {
    fetchingTeam: false,
    fetchingPlayers: false,
    teamData: null,
    teamPlayers: [],
    selectedTeam: null,
    selectedPlayer: null
  }
};
