import React from "react"
import EditForm from "./edit_form"
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
                                <br />
                                <button onClick={()=> this.props.deleteMessage(message.id)} value="delete message">Delete</button>
                                <EditForm editMessage={this.props.editMessage} message={message}/>
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