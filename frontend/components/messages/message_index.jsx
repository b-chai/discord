import React from "react"
import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from "../../actions/message_actions";
import MessageForm from "./message_form"

class MessageIndex extends React.Component{
    constructor(props){
        super(props)
        // this.state = { message: []};
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
              }
            },
            speak: function(data) {
                return this.perform("speak", data)
            },
            load: function() {
                return this.perform("load")
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
                <div ref={this.bottom} className="message-credentials">
                    author: time and date:
                    <br />
                    <div className="message">
                        {message.body}

                    <button className="delete-button" onClick={()=> this.props.deleteMessage(message.id)} value="delete message">Delete</button>
                    </div>
                </div>
            )
        })

        return (
            <div className='message-container'>
                <div className='channel-background'>
                    {allMessages}
                </div>
                    <MessageForm sendMessage={this.props.sendMessage} />
            </div>
        )
    }
}

export default MessageIndex