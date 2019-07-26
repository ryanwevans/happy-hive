const API_URL = process.env.REACT_APP_API_URL

//  ** Action Creators **
const fetchAcheivers = (acheivers) => {
    return {
        type: 'FETCH_ACHEIVERS',
        acheivers
    }
}

const addAcheiver = acheiver => {
    return {
        type: 'ADD_ACHEIVER',
        acheiver
    }
}

export const setAcheiver = (acheiverName) => {
    return {
        type: 'SET_ACHEIVER',
        acheiverName
    }
}

const updateAcheiver = (acheiver) => {
    return {
        type: 'UPDATE_ACHEIVER',
        acheiver
    }
}


//  ** Async Actions **
export const getAcheivers = () => {
    return dispatch => {
        return fetch(`${API_URL}/acheivers`)
        .then(response => response.json())
        .then(acheivers => dispatch(fetchAcheivers(acheivers)))
        .catch(error => console.log(error))
    }
}

export const createAcheiver = (acheiver) => {
    return dispatch => {
        return fetch(`${API_URL}/acheivers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({acheiver})
        })
        .then(response => response.json())
        .then(acheiver => { 
            dispatch(addAcheiver(acheiver))
            console.log(acheiver.name)
            dispatch(setAcheiver(acheiver.name))
        })
        .catch(error => console.log(error))
    }
}

export const editAcheiver = (acheiver) => {
    return dispatch => {
        return fetch(`${API_URL}/acheivers/${acheiver.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({acheiver})
        })
        .then(response => response.json())
        .then(acheiver => dispatch(updateAcheiver(acheiver)))
        .catch(error => console.log(error))
    }
}