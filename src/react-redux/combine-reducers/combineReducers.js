import { combineReducers } from 'redux';
import Users from "../redux-slices/add-user";

const rootReducer = combineReducers({
    Users: Users,
});

export default rootReducer;