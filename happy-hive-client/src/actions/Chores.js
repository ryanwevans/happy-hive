
const API_URL = process.env.REACT_APP_API_URL

export const getChores = () => {
    return dispatch => {
        return fetch(`${API_URL}/chores`)
            .then(resp => resp.json())
            .then(choresData => dispatch({type: 'FETCH_CHORES', choresData}))
            .catch(error => console.log(error))
    }
}