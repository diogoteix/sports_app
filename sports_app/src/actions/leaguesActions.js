import * as allActions from './allActions';

export function receiveLeagues(data) {
    return { type: allActions.RECEIVE_LEAGUES, leagues: data };
}

export function fetchLeagues() {
    return (dispatch) => {
        fetch('https://soccer.sportmonks.com/api/v2.0/leagues?api_token=HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC')
            .then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                if (response.status === 200) {
                    dispatch(receiveLeagues(response.data.data))
                } else {
                    var flash = {
                        type: 'error',
                        title: 'Error getting task list',
                        content: 'There was an error getting the task list. Please try again.'
                    }
                    dispatch({ type: "DISPLAY_FLASH", data: flash })
                }
            });
    };
}