import React from 'react'
import { withRouter } from 'react-router'

class UserList extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }

    checkPath(){
        if (this.props.location.pathname.includes('dm')){
            return true
        }else{
            return false
        }
    }

    selectUser(user){
        if (user.rooms.includes(user.createdAt)){
            // to do - load messages
            this.props.history.replace(`/servers/dm/${user.createdAt}`)
        }else{
            // create channel & redirect
            // to do - need to either remove server id verification or create dedicated dm server
            this.props.createChannel({
                channelName: user.username,
                serverId: 21
            })
            .then(
                this.props.history.replace(`/servers/dm/${user.createdAt}`)
            )
        }
    }

    temp(user){
        console.log('--------------')
        console.log(user)
        console.log(this.props.currentUser[0])
        console.log('--------------')

        if (user.rooms === null) user.rooms = [];

        if (user.rooms.includes(user.createdAt) || user.rooms.includes(this.props.currentUser.createdAt)){
            // redirect to channel
            console.log(true,user)
        }else{
            
            // add channel to both user's rooms

            console.log(false,user)

            const pushed = user.rooms
            pushed.push(user.createdAt)
            const pushedSender = this.props.currentUser[0].rooms
            pushedSender.push(user.createdAt)

            let updatedReceiver = {
                id: user.id,
                username: user.username,
                rooms: pushed,
                createdAt: user.createdAt
            }

            let updatedSender = {
                id: this.props.currentUser.id,
                username: this.props.currentUser.username,
                rooms: pushedSender,
                createdAt: this.props.currentUser.createdAt
            }
            
            // create channel & update both users
            this.props.createChannel({
                channelName: user.username,
                serverId: 21
            })
            .then(
                this.props.editUser(updatedReceiver)
                
            )
            .then(
                this.props.editUser(updatedSender)
            )
            .then(
                this.props.history.replace(`/servers/dm/${user.createdAt}`)
            )
        }

    }

    render(){
        const listUsers = this.props.serverUsers.map(user => {
            return(
                // <button className="users" key={user.id} onClick={()=>this.selectUser(user)}>
                <button className="users" key={user.id} onClick={()=>this.temp(user)}>
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