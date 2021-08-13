import React from "react"
import EditForm from "./edit_form";
import MessageForm from "./message_form"

class MessageIndex extends React.Component{
    constructor(props){
        super(props)
        this.bottom = React.createRef()
    }

    componentDidMount() {
        App.cable.subscriptions.create(
          { channel: "ChatChannel" },
          {
            received: data => {
              switch (data.type) {
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
        );
        this.props.fetchAllMessages();
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    formattedTime(data){
        const date = data.slice(0,10)
        const time = data.slice(11,19)
        const newTime = date + ' ' + time

        return newTime
    }

    render(){
        const allMessages = this.props.messages.map(message => {
            return (
                <div className="message-credentials" key={message.id}>
                    <span className="author-message">
                        {message.authorName}
                    </span>
                    <span className="time-message">
                        {this.formattedTime(message.createdAt)}
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

export default MessageIndex