import React from "react"
import { withRouter } from "react-router";
import EditForm from "./edit_form";
import MessageForm from "./message_form"

class MessageIndex extends React.Component{
    constructor(props){
        super(props)
        this.bottom = React.createRef()
        this.unhide = this.unhide.bind(this)

    }

    componentDidMount() {
        App.cable.subscriptions.create(
          { channel: `ChatChannel`, channelId: this.props.match.params.channelId},
          {
            received: data => {
                switch (data.type) {
                case 'index':
                    return this.props.fetchAllMessages(data)
                case 'message':
                    return this.props.receiveMessage(data.message)
                case 'remove':
                    return this.props.removeMessage(data.id)
              }
            },
            speak: function(data) {
                return this.perform("speak", data)
            },
            load: function(data) {
                return this.perform("load", data)
            },
            remove: function(data) {
                return this.perform('remove', data)
            },
            update: function(data) {
                return this.perform('update', data)
            },
            dm: function(data){
                return this.perform('dm', data)
            }
          }
        )
        // App.cable.subscriptions.subscriptions[0].load(info);
        // this.props.fetchAllMessages(8)
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    formattedTime(data){
        // temporary fix for snake_case and camelCase
        if (data.createdAt){
            const date = data.createdAt.slice(0,10)
            const time = data.createdAt.slice(11,19)
            const newTime = date + ' ' + time

            return newTime    
        } else if (data.created_at){
            const date = data.created_at.slice(0,10)
            const time = data.created_at.slice(11,19)
            const newTime = date + ' ' + time

            return newTime
        }

        return null

    }

    unhide(id){
        const bar = document.querySelector(`.id-${id}`)

        // bar.style.display starts as empty, makes element show in one click instead of two
        if (bar.style.display !== 'block'){
            bar.style.display = "block"
        }else{
            bar.style.display = "none"
        }
    }

    checkPath(){
        if (this.props.location.pathname.includes('dm')){
            return true
        }else{
            return false
        }
    }

    allMessages(){
       const list = this.props.messages.map(message => {
            return (
                <div className="message-credentials" key={message.id}>
                    <span className="author-message">
                        {/* to do - needs to be fixed */}
                        {message.authorName}
                    </span>
                    <span className="time-message">
                        {this.formattedTime(message)}
                    </span>
                    <br/>
                    <div className="message">
                        {message.body}
                    </div>
                    <button onClick={()=>this.unhide(message.id)}>
                        Edit
                    </button>
                    <div className={`hide id-${message.id}`}>
                        <button className="delete-button" onClick={()=> App.cable.subscriptions.subscriptions[0].remove(message)} value="delete message">Delete</button>
                        <EditForm message={message}/>
                    </div>
                </div>
            )
        })
        return list
    }

    render(){

        return (

            this.checkPath() ?

            // Private Chat
            <div>
                Temporary chat
                <div className="empty-space" ref={this.bottom}/>
                <div className="sticky-message">
                    <MessageForm sendMessage={this.props.sendMessage}/>
                </div>
            </div>

            :

            // Public Chat
            <div className='message-container'>
                <div className='channel-background'>
                    <div className="channel-intro">
                        Welcome to #{this.props.currentChannel.channelName}
                    </div>
                    <div className="channel-subtext">
                        This is the start of the #{this.props.currentChannel.channelName} channel
                    </div>
                    {this.allMessages()}
                    <div className="empty-space" ref={this.bottom}/>
                </div>
                <div className="sticky-message">
                    <MessageForm sendMessage={this.props.sendMessage} currentUserId={this.props.currentUserId}
                    currentChannel={this.props.currentChannel}/>
                </div>
            </div>
        )
    }
}

export default withRouter(MessageIndex)