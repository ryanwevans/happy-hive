//  ** Action Creators **

export const updateChoreFormData = choreFormData => {
    return {
        type: 'UPDATED_FORM_DATA',
        choreFormData
    }
}

export const resetChoreFormData = () => {
    return {
        type: 'RESET_FORM_DATA'
    }
}