import React from 'react'
import { withRouter } from 'react-router'
import ChannelForm from './channel_form'

class ChannelIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllChannels()
        console.log('didmount')
    }

    // componentDidUpdate(){
    //     this.props.fetchAllChannels()
    // }

    selectChannel(channel){
        // populates message index
        const info = {type: 'index', id: channel.id}
        App.cable.subscriptions.subscriptions[0].load(info);

        const serverId = this.props.match.params.serverId
        this.props.history.replace(`/servers/${serverId}/${channel.id}`)
        // console.log(this.props.match.params.serverId)
    }

    render(){
        // Creates list of channels
        const listChannels = this.props.channels.map(ele => {
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