import React from "react"
import { withRouter } from "react-router";
import EditForm from "./edit_form";
import MessageForm from "./message_form"

class MessageIndex extends React.Component{
    constructor(props){
        super(props)
        this.bottom = React.createRef()
    }

    componentDidMount() {
        App.cable.subscriptions.create(
          { channel: `ChatChannel`, channelId: this.props.match.params.channelId},
          {
            received: data => {
                switch (data.type) {
                case 'index':
                    // console.log('-------------------')
                    // console.log(data)
                    // console.log('-------------------')
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
            }
          }
        )
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

    render(){
        const allMessages = this.props.messages.map(message => {
            console.log('----------------')
            console.log(message, "allmessages")
            console.log('----------------')
            return (
                <div className="message-credentials" key={message.id}>
                    <span className="author-message">
                        {/* Not working -- needs to be fixed */}
                        {message.authorName}
                    </span>
                    <span className="time-message">
                        {this.formattedTime(message)}
                    </span>
                    <br/>
                    <div className="message">
                        {message.body}

                    <button className="delete-button" onClick={()=> App.cable.subscriptions.subscriptions[0].remove(message)} value="delete message">Delete</button>
                    <EditForm message={message}/>
                    </div>
                </div>
            )
        })

        return (
            <div className='message-container'>
                <div className='channel-background'>
                    {allMessages}
                    <div ref={this.bottom}/>
                </div>
                <div className="sticky-message">
                    <MessageForm sendMessage={this.props.sendMessage} currentUserId={this.props.currentUserId}/>
                </div>
            </div>
        )
    }
}

export default withRouter(MessageIndex)