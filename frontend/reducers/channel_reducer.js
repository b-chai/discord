import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL } from "../actions/channel_actions";

const channelReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CHANNELS:
            return Object.assign({},state, action.channels)
        case RECEIVE_CHANNEL:
            nextState[action.channels.id] = action.channels
            return nextState
        case REMOVE_CHANNEL:
            delete nextState[action.channelId]
            return nextState
        default:
            return state;
    }
}

export default channelReducer