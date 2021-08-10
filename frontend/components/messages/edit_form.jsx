import React from "react"

class EditForm extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            id: this.props.message.id,
            body: this.props.message.body
        }
    }

    handleChange(e){
        this.setState({
            body: e.target.value
        })
    }

    handleSubmit(){
        App.cable.subscriptions.subscriptions[0].update(this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                        <input 
                        type="text" 
                        placeholder={this.props.message.body} 
                        onChange={e=>this.handleChange(e)} 
                        value={this.state.body}/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default EditForm