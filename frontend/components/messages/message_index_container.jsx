import { connect } from 'react-redux'
import { receiveMessage, removeMessage, receiveAllMessages } from '../../actions/message_actions'
import MessageIndex from './message_index'

const mSTP = (state) => {
    return({
    messages: Object.values(state.entities.messages),
    currentUserId: state.session.id,
    channels: Object.values(state.entities.channels)
})}

const mDTP = dispatch => ({
    fetchAllMessages: (messages)=> dispatch(receiveAllMessages(messages)),
    receiveMessage: (message)=> dispatch(receiveMessage(message)),
    removeMessage: (messageId)=> dispatch(removeMessage(messageId)),
})

export default connect(mSTP,mDTP)(MessageIndex)