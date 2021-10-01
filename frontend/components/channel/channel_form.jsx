import React from 'react'

class ChannelForm extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            channelName: '',
            serverId: 2,
        }
    }

    handleSubmit(){
        this.props.createChannel(this.state)
        this.state.channelName = ''
    }

    updateName(e){
        this.setState({
            channelName: e.target.value
        })
    }

    display(){
        const form = document.querySelector('.channel-form')
        if (form.style.display === "none"){
            form.style.display = "block"
        }else{
            form.style.display = "none"
        }
    }

    render(){
        return(
            <div>
                <span className='text-channel'>TEXT CHANNELS
                    <button onClick={()=>this.display()}>+</button>
                </span>

                <div className='channel-form'>
                    <button className="close-button" onClick={this.display}>X</button>
                    <div className="channel-header">Create Text Channel</div>
                    <span className="channel-subtext">in Text Channels</span>

                    <form onSubmit={this.handleSubmit}>
                    <label>Channel Name
                    <br />
                        <input 
                        type="text" 
                        onChange={e=>this.updateName(e)}
                        value={this.state.channelName}/>
                    </label>
                    <br />
                    <input type="submit" value="Create Channel" />
                    </form>
                </div>
            </div>
        )
    }
}

export default ChannelForm