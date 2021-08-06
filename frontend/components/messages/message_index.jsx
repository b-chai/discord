import React from "react"
import MessageForm from "./message_form"

class MessageIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllMessages()
    }

    render(){
        return (
            <div>
                <h1> Messages </h1>
                <div>
                    {this.props.messages.map(message => {
                        return (
                            <div>
                                message_id: {message.id}
                                <br />
                                {message.body}
                                <button onClick={()=> this.props.deleteMessage(message.id)} value="delete message">Delete</button>
                            </div>
                        )
                    })}
                </div>
                    <MessageForm sendMessage={this.props.sendMessage} />
            </div>
        )
    }
}

export default MessageIndex