import { connect } from 'react-redux'
import { createServer, editServer, fetchAllServers, deleteServer, showServer } from '../../actions/server_actions'
import ServerIndex from './server_index'

const mSTP = state => ({
    server: Object.values(state.entities.servers)
})

const mDTP = dispatch => ({
    fetchAllServers: ()=> dispatch(fetchAllServers()),
    createServer: (server)=> dispatch(createServer(server)),
    showServer: (server)=> dispatch(showServer(server)),
    editServer: (server)=> dispatch(editServer(server)),
    deleteServer: (serverId) => dispatch(deleteServer(serverId))
})

export default connect(mSTP,mDTP)(ServerIndex)