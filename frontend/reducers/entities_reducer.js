import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import messageReducer from "./message_reducer"
import serverReducer from "./server_reducer";

// combines reducers that handles data

const entitiesReducer = combineReducers({
  users: usersReducer,
  messages: messageReducer,
  servers: serverReducer
});

export default entitiesReducer;