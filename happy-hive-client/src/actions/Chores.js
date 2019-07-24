import { resetChoreFormData } from "./choreForm";

const API_URL = process.env.REACT_APP_API_URL

//  ** Action Creators **
const fetchChores = chores => {
    return {
        type: 'FETCH_CHORES', 
        chores
    }
}

const addChore = chore => {
    return {
        type: 'ADD_CHORE',
        chore
    }
}

const updateChore = chore => {
    return {
        type: 'UPDATE_CHORE',
        chore
    }
}

// ** Async Actions **
export const getChores = () => {
    return dispatch => {
        return fetch(`${API_URL}/chores`)
            .then(resp => resp.json())
            .then(chores => dispatch(fetchChores(chores)))
            .catch(error => console.log(error))
    }
}

export const createChore = chore => {
    return dispatch => {
        return fetch(`${API_URL}/chores`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ chore })
        })
        .then(response => response.json())
        .then(chore => {
            dispatch(addChore(chore))
            dispatch(resetChoreFormData())
        })
        
        .catch(error => console.log(error))
    }
}

export const editChore = chore => {
    return dispatch => {
        return fetch(`${API_URL}/chores/${chore.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ chore })
        })
        .then(response => response.json())
        .then(chore => {
            dispatch(updateChore(chore))
        })
        .catch(error => console.log(error))
    }
}