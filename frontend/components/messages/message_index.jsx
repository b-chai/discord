import React from "react"
import MessageForm from "./message_form"

class MessageIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllMessage()
    }

    render(){
        return (
            <div>
                <div>
                    {this.props.messages.map(message => {
                        return (
                            <div>
                                [author: time and date:]
                                <br />
                                {message.body}
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