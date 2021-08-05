import * as messageUtil from '../util/message_api_util'

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const REMOVE_MESSAGE = "REMOVE_MESSAGE"

export const receiveMessages = () => ({
    type: RECEIVE_MESSAGES
})

export const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
})

export const removeMessage = messageId => ({
    type: REMOVE_MESSAGE,
    messageId
})