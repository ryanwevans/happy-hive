import { resetRewardFormData } from './rewardForm'

const API_URL = process.env.REACT_APP_API_URL

//  ** Action Creators **
const fetchRewards = rewards => {
    return {
        type: 'FETCH_REWARDS', 
        rewards
    }
}

const addReward = reward => {
    return {
        type: 'ADD_REWARD',
        reward
    }
}

const updateReward = reward => {
    return {
        type: 'UPDATE_REWARD',
        reward
    }
}

// ** Async Actions
export const getRewards = () => {
    return dispatch => {
        return fetch(`${API_URL}/rewards`)
            .then(resp => resp.json())
            .then(rewards => dispatch(fetchRewards(rewards)))
            .catch(error => console.log(error))
    }
}

export const createReward = reward => {
    return dispatch => {
        return fetch(`${API_URL}/rewards`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ reward })
        })
        .then(response => response.json())
        .then(reward => {
            dispatch(addReward(reward))
            dispatch(resetRewardFormData())
        })
        
        .catch(error => console.log(error))
    }
}

export const editReward = reward => {
    return dispatch => {
        return fetch(`${API_URL}/rewards/${reward.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify( {reward} )
        })
        .then(response => response.json())
        .then(reward => {
            dispatch(updateReward(reward))
        })
        .catch(error => console.log(error))
    }
}