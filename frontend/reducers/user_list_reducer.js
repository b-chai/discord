import { RECEIVE_USERS } from "../actions/user_actions";

const userListReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_USERS:
            return Object.assign({},state, action.serverUsers)
        default:
            return state;
    }
}

export default userListReducer