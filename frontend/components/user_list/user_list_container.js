import { connect } from "react-redux"
import UserList from "./user_list"
import { editUser, fetchAllUsers } from "../../actions/user_actions"
import { createChannel } from "../../actions/channel_actions"

const mapStateToProps = state => {
    return({
        serverUsers: Object.values(state.entities.serverUsers),
        currentUser: Object.values(state.entities.users)
    }
)}

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    createChannel: (channel) => dispatch(createChannel(channel)),
    editUser: (user) => dispatch(editUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(UserList)