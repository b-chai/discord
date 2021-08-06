import { RECEIVE_MESSAGES, REMOVE_MESSAGE } from "../actions/message_actions";

const messageReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_MESSAGES:
            return Object.assign({}, state, action.messages)
        case RECEIVE_MESSAGE:
            nextState[action.message.id] = action.message
            return nextState
        case REMOVE_MESSAGE:
            delete nextState[action.messageId]
            return nextState
        default:
            return state;
    }
}

export default messageReducer