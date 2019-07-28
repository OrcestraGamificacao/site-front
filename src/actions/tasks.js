import {ADD_TASK} from './types'

// Action to add a new task on the list
export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}