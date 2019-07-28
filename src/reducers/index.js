import {combineReducers} from 'redux'
import { taskReducer } from "./tasks";

const allReducers = combineReducers({
  tasks: taskReducer
});

export default allReducers