import * as allActions from "./allActions";

export function fetchLeagueTableBegin() {
  return {
    type: allActions.FETCH_LEAGUE_TABLE_BEGIN
  };
}

export function fetchLeagueTableSuccess(data) {
  return {
    type: allActions.FETCH_LEAGUE_TABLE_SUCCESS,
    payload: data
  };
}

export function fetchLeagueTableError(data) {
  return {
    type: allActions.FETCH_LEAGUE_TABLE_ERROR
  };
}

export function fetchTopScorersBegin() {
  return {
    type: allActions.FETCH_TOP_SCORERS_BEGIN
  };
}

export function fetchTopScorersSuccess(data) {
  return {
    type: allActions.FETCH_TOP_SCORERS_SUCCESS,
    payload: data
  };
}

export function fetchTopScorersError(data) {
  return {
    type: allActions.FETCH_TOP_SCORERS_ERROR
  };
}

export function fetchTopScorersPlayerBegin() {
  return {
    type: allActions.FETCH_TOP_SCORER_PLAYER_BEGIN
  };
}

export function fetchTopScorersPlayerSuccess(data) {
  return {
    type: allActions.FETCH_TOP_SCORER_PLAYER_SUCCESS,
    payload: data
  };
}

export function fetchTopScorersPlayerError(data) {
  return {
    type: allActions.FETCH_TOP_SCORER_PLAYER_ERROR
  };
}

export function selectStage(data) {
  return {
    type: allActions.SELECT_STAGE,
    payload: data
  };
}

export function selectTopScorerPlayer(data) {
  return {
    type: allActions.SELECT_TOP_SCORER_PLAYER,
    payload: data
  };
}

export function fetchLeagueTable(seasonId) {
  return function(dispatch) {
    dispatch(fetchLeagueTableBegin());

    return fetch(
      `https://soccer.sportmonks.com/api/v2.0/standings/season/${seasonId}?api_token=HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC`
    )
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response);
          dispatch(fetchLeagueTableSuccess(response.data.data));
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          dispatch(fetchLeagueTableError());
          throw error;
        }
      });
  };
}

export function fetchTopScorers(seasonId) {
  return function(dispatch) {
    dispatch(fetchTopScorersBegin());

    return fetch(
      `https://soccer.sportmonks.com/api/v2.0/topscorers/season/${seasonId}?api_token=HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC&include=goalscorers.player`
    )
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response);
          dispatch(fetchTopScorersSuccess(response.data.data.goalscorers.data));
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          dispatch(fetchTopScorersError());
          throw error;
        }
      });
  };
}

export function fetchTopScorersPlayer(playerId) {
  return function(dispatch) {
    dispatch(fetchTopScorersPlayerBegin());

    return fetch(
      `https://soccer.sportmonks.com/api/v2.0/players/${playerId}?api_token=HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC`
    )
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log(response);
          dispatch(fetchTopScorersPlayerSuccess(response.data.data));
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          dispatch(fetchTopScorersPlayerError());
          throw error;
        }
      });
  };
}
