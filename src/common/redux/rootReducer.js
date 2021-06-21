import {combineReducers} from 'redux';
import repoReducer from "../../features/home/redux/repoReducer";

const reducerMap = {
    repoStore: repoReducer
};

export default combineReducers(reducerMap);