import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';

/* current sample state

{
    entities: {
    users: {}
  },
  session: {
    id: null,
  },
  errors: {
    session: []
  }
}

*/

const rootReducer = combineReducers({
  entities,
  session,
  errors
});

export default rootReducer;
