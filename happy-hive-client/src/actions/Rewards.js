const API_URL = process.env.REACT_APP_API_URL

// ** Async Actions
export const getRewards = () => {
    return dispatch => {
        return fetch(`${API_URL}/rewards`)
            .then(resp => resp.json())
            .then(rewards => dispatch({type: 'FETCH_REWARDS', rewards}))
            .catch(error => console.log(error))
    }
}