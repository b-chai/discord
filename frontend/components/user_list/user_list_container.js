import { connect } from "react-redux"
import UserList from "./user_list"
import { fetchAllUsers } from "../../actions/user_actions"

const mapStateToProps = state => {
    return({
        serverUsers: Object.values(state.entities.serverUsers)
    }
)}

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapStateToProps,mapDispatchToProps)(UserList)