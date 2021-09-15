import React from 'react'
import ChannelForm from './channel_form'

class ChannelIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllChannels()
    }

    render(){
        // Creates list of channels
        const listChannels = this.props.channels.map(ele => {
            return (
                <div className="channel">
                   <button className="channel-name" onClick={()=> this.props.showChannel(ele)}>
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