import React from 'react'
import { withRouter } from 'react-router'
import ChannelForm from './channel_form'

class ChannelIndex extends React.Component {
    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        // list correct channels
    }

    selectChannel(channel){
        // populates message index
        const info = {type: 'index', id: channel.id}
        App.cable.subscriptions.subscriptions[0].load(info);
        
        const serverId = this.props.match.params.serverId
        this.props.history.replace(`/servers/${serverId}/${channel.id}`)
    }

    render(){

        const getChannels = () => {
            // serverId comes out as a string
            const serverId = Number(this.props.match.params.serverId)
            const allChannels = this.props.channels
        
            let selectedChannels = [];
            for (let i = 0; i < allChannels.length; i++) {
                if (allChannels[i].serverId === serverId) selectedChannels.push(allChannels[i]);
            }
        
            return selectedChannels;
        }

        // Creates list of channels
        const listChannels = getChannels().map(ele => {
            return (
                <div className="channel" key={ele.id}>
                   <button className="channel-name" onClick={()=>this.selectChannel(ele)}>
                        # &nbsp; {ele.channelName}
                    </button>
                    <button onClick={()=>this.props.deleteChannel(ele.id)}> X </button>
                </div>
            )
        })

        return(
            <div>
                <div>
                    ( SERVER NAME HERE )
                </div>

                <ChannelForm createChannel={this.props.createChannel}/>
                {listChannels}
            </div>
        )
    }
}

export default withRouter(ChannelIndex)