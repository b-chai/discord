import React from 'react'
import { withRouter } from 'react-router'

class UserList extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllUsers()
    }

    checkPath(){
        if (this.props.location.pathname.includes('dm')){
            return true
        }else{
            return false
        }
    }

    selectUser(user){
        console.log(user)
        console.log(this.props.match)
        if (user.rooms.includes(user.createdAt)){
            // to do - load messages
            this.props.history.replace(`/servers/dm/${user.createdAt}`)
        }else{
            // create channel & redirect
            this.props.createChannel({
                channelName: user.username,
                serverId: this.props.match.params.serverId
            })
            .then(
                this.props.history.replace(`/servers/dm/${user.createdAt}`)
            )
        }
    }

    render(){
        const listUsers = this.props.serverUsers.map(user => {
            return(
                <button className="users" key={user.id} onClick={()=>this.selectUser(user)}>
                    <div className="user-avatar"/>
                    <div className="usernames">
                        {user.username}
                    </div>
                </button>
            )
        })

        return(

            this.checkPath() ?

            // Private Chat
            <div className="user-list">
                <div className="user-list-header">
                    Direct Messages
                </div>
                <br />
                {listUsers}
            </div>

            :

            // Public Chat
            <div className="user-list">
                <div className="user-list-header">
                    MEMBERS - {listUsers.length}
                </div>
                {listUsers}
            </div>
        )
    }
}

export default withRouter(UserList)