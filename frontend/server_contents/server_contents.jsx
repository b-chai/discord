import React from "react";
import ChannelIndexContainer from "../components/channel/channel_index_container";
import GreetingContainer from "../components/greeting/greeting_container";
import MessageIndexContainer from "../components/messages/message_index_container";

class ServerContent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="flex">
             {/* text channel side bar */}
             <div className="greeting">
                <div className="channel-index">
                    <ChannelIndexContainer serverId={this.props.match.params} />
                </div>
                <div className="header-group">
                    <GreetingContainer />
                </div>
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

export default ServerContent