import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL } from "../actions/channel_actions";

const channelReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CHANNELS:
            // todo - servers will need to update proper channel

            return Object.assign({},state, action.channels)
        case RECEIVE_CHANNEL:
            nextState[action.channel.id] = action.channel
            return nextState
        case REMOVE_CHANNEL:
            delete nextState[action.channelId]
            return nextState
        default:
            return state;
    }
}

export default channelReducer