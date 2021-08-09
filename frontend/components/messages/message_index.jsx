import React from "react"
import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from "../../actions/message_actions";
import MessageForm from "./message_form"

class MessageIndex extends React.Component{
    constructor(props){
        super(props)
        this.bottom = React.createRef()
    }

    // componentDidMount(){
    //     this.props.fetchAllMessages()
    // }

    componentDidMount() {
        App.cable.subscriptions.create(
          { channel: "ChatChannel" },
          {
            received: data => {
              switch (data.type) {
                case 'message':
                    return this.props.sendMessage(data.body)
                case 'load':
                    return this.props.fetchAllMessages()
                case 'remove':
                    return this.props.removeMessage(data.id)
              }
            },
            speak: function(data) {
                return this.perform("speak", data)
            },
            load: function() {
                return this.perform("load")
            },
            remove: function(data) {
                return this.perform('remove', data)
            }
          }
        );
        this.props.fetchAllMessages();
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    render(){
        const allMessages = this.props.messages.map(message => {
            return (
                <div className="message-credentials" key={message.id}>
                    <span className="author-message">
                        author: {message.id}
                    </span>
                    <span className="time-message">
                        time and date:
                    </span>
                    <br />
                    <div className="message">
                        {message.body}

                    <button className="delete-button" onClick={()=> App.cable.subscriptions.subscriptions[0].remove(message)} value="delete message">Delete</button>
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
                    <MessageForm sendMessage={this.props.sendMessage} />
            </div>
        )
    }
}

export default MessageIndex