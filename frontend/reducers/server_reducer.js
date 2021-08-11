import { RECEIVE_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";


const serverReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_SERVERS:
            return Object.assign({}, state, action.servers)

        case RECEIVE_SERVER:
            nextState[action.server.id] = action.server
            return nextState

        case REMOVE_SERVER:
            delete nextState[action.serverId]
            return nextState
        default:
            return state;
    }
}

export default serverReducer