import { connect } from 'react-redux'
import { fetchAllChannels } from '../../actions/channel_actions'
import { fetchAllServers } from '../../actions/server_actions'
import { fetchAllUsers } from '../../actions/user_actions'
import Application from './main'

const mapStateToProps = state => {

    return({
        channels: Object.values(state.entities.channels)
    })
}

const mapDispatchToProps = dispatch => ({
    fetchAllChannels: ()=> dispatch(fetchAllChannels()),
    fetchAllServers: ()=> dispatch(fetchAllServers()),
    fetchAllUsers: ()=> dispatch(fetchAllUsers())
})

export default connect(mapStateToProps,mapDispatchToProps)(Application)