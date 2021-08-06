import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import messageReducer from "./message_reducer"

// combines reducers that handles data

const entitiesReducer = combineReducers({
  users: usersReducer,
  messages: messageReducer,
});

export default entitiesReducer;