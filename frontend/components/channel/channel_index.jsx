import React from 'react'
import ChannelForm from './channel_form'

class ChannelIndex extends React.Component {
    constructor(props){
        super(props)
        console.log("------------")
        console.log(this.props)
        console.log("------------")
    }

    componentDidMount(){
        this.props.fetchAllChannels()
        
    }

    componentDidUpdate(){
        // Sets first channel as default
        // after channels are fetched
        this.state = {
            currentChannel: this.props.channels[0]
        }
    }

    selectChannel(channel){
        this.setState({currentChannel: channel.id})
        this.props.history.replace(`/${this.state.currentChannel}`)
        console.log(this.state)
    }

    render(){
        // Creates list of channels
        const listChannels = this.props.channels.map(ele => {
            return (
                <div className="channel" key={ele.id}>
                   <button className="channel-name" onClick={(e)=>this.selectChannel(ele)}>
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

export default ChannelIndex