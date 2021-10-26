import React from 'react'
import { withRouter } from 'react-router'
import UserListContainer from '../user_list/user_list_container'
import ChannelForm from './channel_form'

class ChannelIndex extends React.Component {
    constructor(props){
        super(props)
        
    }

    selectChannel(channel){
        // populates message index
        const info = {type: 'index', id: channel.id}
        App.cable.subscriptions.subscriptions[0].load(info);
        
        const serverId = this.props.match.params.serverId
        this.props.history.replace(`/servers/${serverId}/${channel.id}`)
    }

    selectDropdown(){
        const content = document.querySelector('.dropdown-content')

        if (content.style.display === "none"){
            content.style.display = "block"
        }else{
            content.style.display = "none"
        }
    }

    checkPath(){
        if (this.props.location.pathname.includes('dm')){
            return true
        }else{
            return false
        }
    }

    listChannels(){

        // serverId comes out as a string
        const serverId = Number(this.props.match.params.serverId)
        const allChannels = this.props.channels
    
        let selectedChannels = [];
        for (let i = 0; i < allChannels.length; i++) {
            if (allChannels[i].serverId === serverId) selectedChannels.push(allChannels[i]);
        }

        const list = selectedChannels.map(ele => {
            return (
                <div className="channel" key={ele.id}>
                <button className="channel-name" onClick={()=>this.selectChannel(ele)}>
                        # &nbsp; {ele.channelName}
                    </button>
                    <button onClick={()=>this.props.deleteChannel(ele.id)}> X </button>
                </div>
            )
        })

        return list
    }

    render(){
        return(
            this.checkPath() ?

            // Private Chat
            <div>
                <UserListContainer/>
            </div>

            :

            // Public Chat
            <div>

                <ChannelForm createChannel={this.props.createChannel}/>
                
                <div className="channel-list">
                    
                    <div className='server-setting'>
                        <div className="server-name">
                            {this.props.currentServer.serverName}
                        </div>
                        <div className="dropdown">
                            <button className="dropdown-button" onClick={()=> this.selectDropdown()}>Setting</button>
                            <div className="dropdown-content" style={{display: "none"}}>
                                <div>Edit Server</div>
                                <div>Delete Server</div>
                            </div>
                        </div>
                    </div>

                <hr className="channel-hr"/>
                    
                    {this.listChannels()}
                </div>
            </div>
        )
    }
}

export default withRouter(ChannelIndex)