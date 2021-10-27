import { connect } from 'react-redux'
import { createChannel } from '../../actions/channel_actions'
import { createServer, editServer, fetchAllServers, deleteServer, showServer } from '../../actions/server_actions'
import ServerIndex from './server_index'

const mSTP = (state,ownProps) => {
    const getChannels = () => {
        // serverId comes out as a string
        const serverId = Number(ownProps.match.params.serverId)
        const allChannels = Object.values(state.entities.channels)
    
        let selectedChannels = [];
        for (let i = 0; i < allChannels.length; i++) {
            if (allChannels[i].serverId === serverId) selectedChannels.push(allChannels[i]);
        }
        return selectedChannels;
    }
    return({
    server: Object.values(state.entities.servers),
    channels: getChannels(),
    currentUser: state.session.id
})}

const mDTP = dispatch => ({
    fetchAllServers: ()=> dispatch(fetchAllServers()),
    createServer: (server)=> dispatch(createServer(server)),
    showServer: (server)=> dispatch(showServer(server)),
    editServer: (server)=> dispatch(editServer(server)),
    deleteServer: (serverId) => dispatch(deleteServer(serverId)),
    createChannel: (channel) => dispatch(createChannel(channel))
})

export default connect(mSTP,mDTP)(ServerIndex)