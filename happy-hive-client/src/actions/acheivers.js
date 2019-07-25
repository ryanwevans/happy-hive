const API_URL = process.env.REACT_APP_API_URL

//  ** Action Creators **
const addAcheiver = acheiver => {
    return {
        type: 'ADD_ACHEIVER',
        acheiver
    }
}

const fetchAcheivers = (acheivers) => {
    return {
        type: 'FETCH_ACHEIVERS',
        acheivers
    }
}

const updateAcheiver = (acheiver) => {
    return {
        type: 'UPDATE_ACHEIVER',
        acheiver
    }
}


//  ** Async Actions **
