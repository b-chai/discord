import React from 'react'
import { Link, Route } from 'react-router-dom'
import ChannelIndexContainer from '../channel/channel_index_container'
import GreetingContainer from '../greeting/greeting_container'
import MessageIndexContainer from '../messages/message_index_container'
import ServerForm from './server_form'
import ServerUpdateForm from './server_update_form'

class ServerIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllServers()
    }

    // display(){
    //     const form = document.querySelector('.server-update-form')
    //     if (form.style.display === "none"){
    //         form.style.display = "block"
    //     }else{
    //         form.style.display = "none"
    //     }
    // }

    clickServer(server){
        this.props.showServer(server)
        .then(()=>this.props.history.replace(`servers/${server.id}`))
    }

    render(){
        const allServers = this.props.server.map(ele => {
            return (
                <div key={ele.id}>
                    <div className="server-update-form">
                        <ServerUpdateForm 
                        editServer={this.props.editServer} 
                        deleteServer={this.props.deleteServer} 
                        server={ele}/>
                    </div>
                    
                    <button className="server-button" onClick={()=>this.clickServer(ele)} >
                        {ele.serverName[0].toUpperCase()}
                    </button>
                </div>
            )
        })
        console.log("-----------------")
        console.log(this.props)
        console.log(this.props.match.params)
        console.log("-----------------")
        return(
            <div className="flex">
                {/* server sidebar */}
                <div className="server-list">
                    {allServers}
                    <ServerForm createServer={this.props.createServer}/>
                </div>

                {/* text channel side bar */}
                <div className="greeting">
                    <div className="channel-index">
                        <ChannelIndexContainer serverId={this.props.match.params} />
                    </div>
                    <GreetingContainer />
                </div>

                {/* Messages */}
                <div className="message-index">
                    <MessageIndexContainer serverId={this.props.match.params}/>
                </div>

                {/* User list */}
                <div></div>
            </div>
        )
    }
}

export default ServerIndex