import * as messageUtil from '../util/message_api_util'

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"

export const receiveAllMessages = messages => ({
    type: RECEIVE_MESSAGES,
    messages
})

export const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
})

export const removeMessage = messageId => ({
    type: REMOVE_MESSAGE,
    messageId
})

export const fetchAllMessages = () => dispatch => {
    return messageUtil.fetchAllMessages()
    .then(res => dispatch(receiveAllMessages(res)))
}

export const sendMessage = (message) => dispatch => {
    return messageUtil.sendMessage(message)
    .then(res => dispatch(receiveMessage(res)))
}

export const editMessage = (message) => dispatch => {
    return messageUtil.editMessage(message)
    .then(res => dispatch(receiveMessage(res)))
}

export const deleteMessage = (messageId) => dispatch => {
    return messageUtil.deleteMessage(messageId)
    .then( () => dispatch(removeMessage(messageId)))
}