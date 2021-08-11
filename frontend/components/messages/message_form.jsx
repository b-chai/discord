import React from "react"

class MessageForm extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        this.state = {body: ''}
    }

    update(e){
        this.setState({
            body: e.target.value
        })
    }

    handleSubmit(){
        App.cable.subscriptions.subscriptions[0].speak({body: this.state.body});
        this.setState({body: ''})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                        <input 
                        className="message-box"
                        type="text" 
                        placeholder='message to "this channel"' 
                        onChange={e=>this.update(e)} 
                        value={this.state.body}/>

                    <input type="submit" value="submit" className='message-button'/>
                </form>
            </div>
        )
    }
}

export default MessageForm