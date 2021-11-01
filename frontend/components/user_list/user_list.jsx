import React from 'react'
import { withRouter } from 'react-router'

class UserList extends React.Component{
    constructor(props){
        super(props)
    }

    checkPath(){
        if (this.props.location.pathname.includes('dm')){
            return true
        }else{
            return false
        }
    }

    selectUser(user){

        if (user.rooms === null) user.rooms= Array()

        // temporary solution until i figure out how to save objects in the backend
        let result = false
        const roomCheck = () => {
            for (let i = 0 ; i < user.rooms.length ; i++){
                let userRoom = user.rooms[i]

                this.props.currentUser[0].rooms.forEach(room=>{
                    if(userRoom === room) return result = room
                })
            }

            return result
        }

        // memoization
        let check = roomCheck()
        
        if (check){
            // redirect to channel

            const info = {type: 'index', id: check}
            App.cable.subscriptions.subscriptions[0].load(info);
            this.props.history.replace(`/servers/dm/${check}`)
        }else{
            
            let roomId

            // create channel & update both users
            this.props.createChannel({
                channelName: user.username,
                serverId: 1
            })
            .then(
                newChannel=> {
                    roomId = newChannel.channel.id

                    const pushed = user.rooms
                    pushed.push(roomId)
                    
                    // todo - temporary null check - these should not be null
                    if(this.props.currentUser[0].rooms === null) this.props.currentUser[0].rooms = []

                    const pushedSender = this.props.currentUser[0].rooms
                    pushedSender.push(roomId)
        
                    let updatedReceiver = {
                        id: user.id,
                        username: user.username,
                        rooms: pushed,
                        // createdAt: user.createdAt
                    }
        
                    let updatedSender = {
                        id: this.props.currentUser[0].id,
                        username: this.props.currentUser[0].username,
                        rooms: pushedSender,
                        // createdAt: this.props.currentUser[0].createdAt
                    }

                // add channel to both user's rooms
                
                this.props.editUser(updatedReceiver)
                this.props.editUser(updatedSender)
                this.props.history.replace(`/servers/dm/${roomId}`)
                }
            )
        }

        // Version using objects (incomplete)

        // if ((user.createdAt in user.rooms) || (this.props.currentUser.createdAt in user.rooms)){
        //     // redirect to channel
        //     const info = {type: 'index', id: this.props.match.params.channelId}
        //     App.cable.subscriptions.subscriptions[0].load(info);
        //     this.props.history.replace(`/servers/dm/${user.createdAt}`)
        // }else{
            
        //     let roomId = 0

        //     // create channel & update both users
        //     this.props.createChannel({
        //         channelName: user.username,
        //         serverId: 1
        //     })
        //     .then(
        //         newChannel=> {
        //             roomId = newChannel.channel.id
        //             const roomObj = {
        //                 [user.createdAt]: roomId
        //             }
        
        //             const pushed = user.rooms
        //             pushed.push(roomObj)
                    
        //             // todo - temporary null check - these should not be null
        //             if(this.props.currentUser[0].rooms === null) this.props.currentUser[0].rooms = []

        //             const pushedSender = this.props.currentUser[0].rooms
        //             pushedSender.push(roomObj)
        
        //             let updatedReceiver = {
        //                 id: user.id,
        //                 username: user.username,
        //                 rooms: pushed,
        //                 // createdAt: user.createdAt
        //             }
        
        //             let updatedSender = {
        //                 id: this.props.currentUser[0].id,
        //                 username: this.props.currentUser[0].username,
        //                 rooms: pushedSender,
        //                 // createdAt: this.props.currentUser[0].createdAt
        //             }

        //         // add channel to both user's rooms
                
        //         this.props.editUser(updatedReceiver)
        //         this.props.editUser(updatedSender)
        //         this.props.history.replace(`/servers/dm/${roomId}`)
        //         }
        //     )
        // }

    }

    hover(id){
        const user = document.querySelector(`.user-id-${id}`)
        user.style.background = "#393C43"
    }

    leave(id){
        const user = document.querySelector(`.user-id-${id}`)
        user.style.background = "transparent"
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

        const dmList = this.props.serverUsers.map(user => {
            if (this.props.currentUser[0].id === user.id){
                return null
            }else{
            return(
                <button className={`users user-id-${user.id}`} key={user.id} onClick={()=>this.selectUser(user)} onMouseOver={()=>this.hover(user.id)} onMouseLeave={()=>this.leave(user.id)}>
                    <div className="user-avatar"/>
                    <div className="usernames">
                        {user.username}
                    </div>
                </button>
            )}
        })

        return(

            this.checkPath() ?

            // Private Chat
            <div className="dm-user-list">
                <div className="user-list-header">
                    Direct Messages
                </div>
                <br />
                {dmList}
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