import { connect } from 'react-redux'
import { fetchAllMessages,sendMessage,editMessage, removeMessage } from '../../actions/message_actions'
import MessageIndex from './message_index'

const mSTP = (state) => ({
    messages: Object.values(state.entities.messages)
})

const mDTP = dispatch => ({
    fetchAllMessages: ()=> dispatch(fetchAllMessages()),
    sendMessage: (message)=> dispatch(sendMessage(message)),
    editMessage: (message)=> dispatch(editMessage(message)),
    removeMessage: (messageId)=> dispatch(removeMessage(messageId))
})

export default connect(mSTP,mDTP)(MessageIndex)