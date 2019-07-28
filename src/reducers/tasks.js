import {ADD_TASK} from '../actions/types'

export function taskReducer(state = [
    {
        task_id: 1,
        name: 'First task',
        description: 'Description of the task',
        done: false
    }
], action) {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}