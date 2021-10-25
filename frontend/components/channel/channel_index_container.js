import { connect } from "react-redux";
import { createChannel, deleteChannel, editChannel, fetchAllChannels, showChannel } from "../../actions/channel_actions";
import { editServer, deleteServer } from "../../actions/server_actions";
import ChannelIndex from "./channel_index";

const mSTP = (state,ownProps) => {
    
    const currentServer = Object.values(state.entities.servers).find(ele=>{
        return ele.id === Number(ownProps.serverId.serverId)
    })

    return({
    channels: Object.values(state.entities.channels),
    currentServer: currentServer
})}

const mDTP = dispatch => ({
    fetchAllChannels: () => dispatch(fetchAllChannels()),
    createChannel: (channel) => dispatch(createChannel(channel)),
    showChannel: (channel) => dispatch(showChannel(channel)),
    editChannel: (channel) => dispatch(editChannel(channel)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
    editServer: (server) => dispatch(editServer(server)),
    deleteServer: (serverId) => dispatch(deleteServer(serverId))
})

export default connect(mSTP,mDTP)(ChannelIndex)