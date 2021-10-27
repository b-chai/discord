import React from "react"
import { withRouter } from 'react-router'

class MessageForm extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        this.state = {
            body: '',
            authorId: this.props.currentUserId,
            channelId: this.props.match.params.channelId
        }
    }

    update(e){
        this.setState({
            body: e.target.value,
            channelId: this.props.match.params.channelId
        })
    }

    handleSubmit(){
        App.cable.subscriptions.subscriptions[0].speak({message: this.state});
        this.setState({body: ''})
    }

    placeholderText(){
        if (this.props.location.pathname.includes('dm')){
            return `message to #${this.props.receiver.username}`
        }else{
            return `message to #${this.props.currentChannel.channelName}`
        }
    }

    render(){

        return(
            <div className='message-box-background'>
                <form className ="message-box" onSubmit={this.handleSubmit}>
                        <input 
                        className="inner-message-box"
                        type="text" 
                        placeholder={this.placeholderText()} 
                        onChange={e=>this.update(e)} 
                        value={this.state.body}/>

                    <input type="submit" value="submit" className='message-button'/>
                </form>
            </div>
        )
    }
}

export default withRouter(MessageForm)