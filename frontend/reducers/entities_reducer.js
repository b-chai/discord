import { combineReducers } from "redux";
import usersReducer from "./users_reducer";

// combines reducers that handles data

const entitiesReducer = combineReducers({
  users: usersReducer
});

export default entitiesReducer;