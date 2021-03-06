import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';
  
// keeps track of error messages

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_SESSION_ERRORS:
        return action.errors;
      case RECEIVE_CURRENT_USER:
        return [];
      case CLEAR_ERRORS:
        console.log(state)
        return action.errors = []
      default:
        return state;
    }
};