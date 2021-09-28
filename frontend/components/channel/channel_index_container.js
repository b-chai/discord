import { connect } from "react-redux";
import { createChannel, deleteChannel, editChannel, fetchAllChannels, showChannel } from "../../actions/channel_actions";
import ChannelIndex from "./channel_index";

const mSTP = state => ({
    channels: Object.values(state.entities.channels),
    currentChannel: ''
})

const mDTP = dispatch => ({
    fetchAllChannels: () => dispatch(fetchAllChannels()),
    createChannel: (channel) => dispatch(createChannel(channel)),
    showChannel: (channel) => dispatch(showChannel(channel)),
    editChannel: (channel) => dispatch(editChannel(channel)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
})

export default connect(mSTP,mDTP)(ChannelIndex)