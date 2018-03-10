import update from "immutability-helper";
import initialState from "./initialState";
import {
  FETCH_LEAGUE_TABLE_BEGIN,
  FETCH_LEAGUE_TABLE_SUCCESS,
  FETCH_LEAGUE_TABLE_ERROR,
  SELECT_STAGE,
  FETCH_TOP_SCORERS_BEGIN,
  FETCH_TOP_SCORERS_SUCCESS,
  FETCH_TOP_SCORERS_ERROR,
  SELECT_TOP_SCORER_PLAYER,
  FETCH_TOP_SCORER_PLAYER_BEGIN,
  FETCH_TOP_SCORER_PLAYER_SUCCESS,
  FETCH_TOP_SCORER_PLAYER_ERROR
} from "../actions/allActions";

export default function leagueTable(state = initialState.leagueTable, action) {
  switch (action.type) {
    case FETCH_LEAGUE_TABLE_BEGIN:
      return update(state, { fetchingData: { $set: true } });
    case FETCH_LEAGUE_TABLE_SUCCESS:
      return update(state, {
        fetchingData: { $set: false },
        stagesList: { $set: action.payload }
      });
    case FETCH_LEAGUE_TABLE_ERROR:
      return update(state, {
        fetchingData: { $set: false },
        stagesList: { $set: [] }
      });
    case FETCH_TOP_SCORERS_BEGIN:
      return update(state, { fetchingTopScorers: { $set: true } });
    case FETCH_TOP_SCORERS_SUCCESS:
      return update(state, {
        fetchingTopScorers: { $set: false },
        topScorers: { $set: action.payload }
      });
    case FETCH_TOP_SCORERS_ERROR:
      return update(state, {
        fetchingTopScorers: { $set: false },
        topScorers: { $set: [] }
      });
    case FETCH_TOP_SCORER_PLAYER_BEGIN:
      return update(state, { fetchingTopScorersPlayer: { $set: true } });
    case FETCH_TOP_SCORER_PLAYER_SUCCESS:
      console.log("FETCH_TOP_SCORER_PLAYER_SUCCESS");
      console.log(action);
      return update(state, {
        fetchingTopScorersPlayer: { $set: false },
        player: { $set: action.payload },
        selectedPlayer: { $set: action.payload.player_id }
      });
    case FETCH_TOP_SCORER_PLAYER_ERROR:
      return update(state, {
        fetchingTopScorersPlayer: { $set: false },
        player: { $set: null }
      });
    case SELECT_STAGE:
      return update(state, { selectedStage: { $set: action.payload } });
    case SELECT_TOP_SCORER_PLAYER:
      return update(state, { selectedPlayer: { $set: action.payload } });
    default:
      return state;
  }
}
