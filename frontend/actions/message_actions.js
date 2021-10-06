import * as messageUtil from '../util/message_api_util'

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"

export const receiveAllMessages = (data) => {
    return ({
    type: RECEIVE_MESSAGES,
    messages: data.messages
})}

export const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
})

export const removeMessage = messageId => ({
    type: REMOVE_MESSAGE,
    messageId
})

// export const fetchAllMessages = channelId => dispatch => {
//     return messageUtil.fetchAllMessages()
//     .then(res => dispatch(receiveAllMessages(res,channelId)))
// }
export const fetchAllMessages = channelId => dispatch => {
    return messageUtil.fetchAllMessages()
    .then(res => dispatch(receiveAllMessages(res,channelId)))
}