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

        const listChannels = this.props.channels.map(ele => {
            console.log(ele)
            return (
                <div className="channel">
                    # &nbsp; {ele.channelName}
                    <button onClick={()=>this.props.deleteChannel(ele.id)}> X </button>
                </div>
            )
        })

        return(
            <div>
                <ChannelForm createChannel={this.props.createChannel}/>
                {listChannels}
            </div>
        )
    }
}

export default ChannelIndex