import React from "react";
import { withRouter } from "react-router";
import ChannelIndexContainer from "../channel/channel_index_container";
import GreetingContainer from "../greeting/greeting_container";
import MessageIndexContainer from "../messages/message_index_container";
import UserListContainer from "../user_list/user_list_container";

class ServerContent extends React.Component{
    constructor(props){
        super(props)
    }

    checkPath(){
        if (this.props.match.path === '/servers/dm'){
            return true
        }else{
            return false
        }
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

        </div>
        )
    }
}

export default withRouter(ServerContent)