const API_URL = process.env.REACT_APP_API_URL

//  ** Action Creators **
const fetchAchievers = (achievers) => {
    return {
        type: 'FETCH_ACHIEVERS',
        achievers
    }
}

const addAchiever = achiever => {
    return {
        type: 'ADD_ACHIEVER',
        achiever
    }
}

export const setAchiever = (achieverName) => {
    sessionStorage.setItem('username', achieverName)
    return {
        type: 'SET_ACHIEVER',
        achieverName
    }
}

const updateAchiever = (achiever) => {
    return {
        type: 'UPDATE_ACHIEVER',
        achiever
    }
}


//  ** Async Actions **
export const getAchievers = () => {
    return dispatch => {
        return fetch(`${API_URL}/achievers`)
        .then(response => response.json())
        .then(achievers => dispatch(fetchAchievers(achievers)))
        .catch(error => console.log(error))
    }
}

export const createAchiever = (achiever) => {
    return dispatch => {
        return fetch(`${API_URL}/achievers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({achiever})
        })
        .then(response => response.json())
        .then(achiever => { 
            dispatch(addAchiever(achiever))
            dispatch(setAchiever(achiever.name))
        })
        .catch(error => console.log(error))
    }
}

export const editAchiever = (achiever) => {
    return dispatch => {
        return fetch(`${API_URL}/achievers/${achiever.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({achiever})
        })
        .then(response => response.json())
        .then(achiever => dispatch(updateAchiever(achiever)))
        .catch(error => console.log(error))
    }
}