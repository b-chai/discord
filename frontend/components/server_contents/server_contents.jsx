import React from "react";
import ChannelIndexContainer from "../channel/channel_index_container";
import GreetingContainer from "../greeting/greeting_container";
import MessageIndexContainer from "../messages/message_index_container";
import UserListContainer from "../user_list/user_list_container";

class ServerContent extends React.Component{
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

    render(){
        return(
            this.checkPath() ? 

            // Private chat
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

        </div>
            
            :

            // Public chat
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
            <div>
                <UserListContainer />
            </div>
        </div>
        )
    }
}

export default ServerContent