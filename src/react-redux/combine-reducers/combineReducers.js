import { combineReducers } from 'redux';
import Users from "../redux-slices/add-user";
import Search from "../redux-slices/search-user";


const rootReducer = combineReducers({
    Users: Users,
    Search: Search,
});

export default rootReducer;