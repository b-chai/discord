import * as channelUtil from '../util/channel_api_util'

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS"
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL"
export const REMOVE_CHANNEL = "REMOVE_CHANNEL"

export const receiveAllChannels = channels => ({
    type: RECEIVE_CHANNELS,
    channels
})

export const receiveChannel = channel => ({
    type: RECEIVE_CHANNEL,
    channel
})

export const removeChannel = channelId => ({
    type: REMOVE_CHANNEL,
    channelId
})

export const fetchAllChannels = () => dispatch => {
    return channelUtil.fetchAllChannels()
    .then(res=> dispatch(receiveAllChannels(res)))
}

export const createChannel = channel => dispatch => {
    return channelUtil.createChannel(channel)
    .then(res=> dispatch(receiveChannel(channel)))
}

export const showChannel = channel => dispatch => {
    return channelUtil.showChannel(channel)
    .then(res=> dispatch(receiveChannel(res)))
}

export const editChannel = channel => dispatch => {
    return channelUtil.editChannel(channel)
    .then(res => dispatch(receiveChannel(res)))
}

export const deleteChannel = channelId => dispatch => {
    return channelUtil.deleteChannel(channelId)
    .then(res => dispatch(removeChannel(channelId)))
}