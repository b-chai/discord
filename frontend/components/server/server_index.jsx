import React from 'react'
import ChannelIndexContainer from '../channel/channel_index_container'
import GreetingContainer from '../greeting/greeting_container'
import MessageIndexContainer from '../messages/message_index_container'
import ServerForm from './server_form'
import ServerUpdateForm from './server_update_form'

class ServerIndex extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }

    componentDidMount(){
        this.props.fetchAllServers()
    }

    display(){
        const form = document.querySelector('.server-update-form')
        if (form.style.display === "none"){
            form.style.display = "block"
        }else{
            form.style.display = "none"
        }
    }

    render(){
        const allServers = this.props.server.map(ele => {
            return (
                <div>
                    <div className="server-update-form">
                        <ServerUpdateForm 
                        editServer={this.props.editServer} 
                        deleteServer={this.props.deleteServer} 
                        server={ele}/>
                    </div>

                    <button className="server-button" onClick={()=>this.display()} key={ele.id}>
                        {ele.serverName[0].toUpperCase()}
                    </button>
                </div>
            )
        })

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
                        <ChannelIndexContainer/>
                    </div>
                    <GreetingContainer />
                </div>

                {/* Messages */}
                <div className="message-index">
                    <MessageIndexContainer/>
                </div>

                {/* User list */}
                <div></div>
            </div>
        )
    }
}

export default ServerIndex