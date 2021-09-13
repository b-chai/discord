import { connect } from "react-redux";
import { createChannel, deleteChannel, editChannel, showChannel } from "../../actions/channel_actions";
import ChannelIndex from "./channels";

const mSTP = state => ({
    channel: Object.values(state.entities.channels)
})

const mDTP = dispatch => ({
    createChannel: (channel) => dispatch(createChannel(channel)),
    showChannel: (channel) => dispatch(showChannel(channel)),
    editChannel: (channel) => dispatch(editChannel(channel)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
})

export default connect(mSTP,mDTP)(ChannelIndex)