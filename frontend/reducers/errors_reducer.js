import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";

// combines all reducers that handles errors

const errorsReducer = combineReducers({
  session: sessionErrorsReducer
});

export default errorsReducer;