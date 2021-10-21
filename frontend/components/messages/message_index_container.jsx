import { connect } from 'react-redux'
import { receiveMessage, removeMessage, receiveAllMessages } from '../../actions/message_actions'
import MessageIndex from './message_index'

const mSTP = (state,ownProps) => {

    const currentChannel = Object.values(state.entities.channels).find(ele=>{
        return ele.id === Number(ownProps.serverId.channelId)
    })

    return({
    messages: Object.values(state.entities.messages),
    currentUserId: state.session.id,
    currentChannel: currentChannel
})}

const mDTP = dispatch => ({
    fetchAllMessages: (messages)=> dispatch(receiveAllMessages(messages)),
    receiveMessage: (message)=> dispatch(receiveMessage(message)),
    removeMessage: (messageId)=> dispatch(removeMessage(messageId)),
})

export default connect(mSTP,mDTP)(MessageIndex)