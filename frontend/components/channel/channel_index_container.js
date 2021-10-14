import { connect } from "react-redux";
import { createChannel, deleteChannel, editChannel, fetchAllChannels, showChannel } from "../../actions/channel_actions";
import ChannelIndex from "./channel_index";

const getChannels = (state, currentServerId) => {
    const allChannels = Object.values(state.entities.channels);

    let selectedChannels = [];
    for (let i = 0; i < allChannels.length; i++) {
        if (allChannels[i].serverId === currentServerId) selectedChannels.push(allChannels[i]);
    }

    return selectedChannels;
}

const mSTP = (state,ownProps) => {
    
    return({
    channels: Object.values(state.entities.channels),
    currentChannel: ''
})}

const mDTP = dispatch => ({
    fetchAllChannels: () => dispatch(fetchAllChannels()),
    createChannel: (channel) => dispatch(createChannel(channel)),
    showChannel: (channel) => dispatch(showChannel(channel)),
    editChannel: (channel) => dispatch(editChannel(channel)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
})

export default connect(mSTP,mDTP)(ChannelIndex)