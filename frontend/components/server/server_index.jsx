import React from 'react'
import GreetingContainer from '../greeting/greeting_container'
import MessageIndexContainer from '../messages/message_index_container'
import ServerForm from './server_form'

class ServerIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllServers()
    }

    render(){
        const allServers = this.props.server.map(ele => {
            return (
                <div>
                    <button className="server-button">
                        {ele.serverName[0].toUpperCase()}
                    </button>
                </div>
            )
        })

        return(
            <div className="flex">
                <div className="server-list">
                    {allServers}
                    <ServerForm createServer={this.props.createServer}/>
                </div>
                <div className="greeting">
                    <GreetingContainer />
                </div>
                <div className="message-index">
                    <MessageIndexContainer/>
                </div>
            </div>
        )
    }
}

export default ServerIndex