const API_URL = process.env.REACT_APP_API_URL


// ** Async Actions **
export const getChores = () => {
    return dispatch => {
        return fetch(`${API_URL}/chores`)
            .then(resp => resp.json())
            .then(chores => dispatch({type: 'FETCH_CHORES', chores}))
            .catch(error => console.log(error))
    }
}