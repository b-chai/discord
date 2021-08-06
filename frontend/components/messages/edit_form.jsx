import React from "react"

class EditForm extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {body: this.props.message.body}
    }

    handleChange(e){
        this.setState({
            body: e.target.value
        })
    }

    handleSubmit(){
        this.props.editMessage(this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder='Edit message' onChange={e=>this.handleChange(e)} value={this.state.body}/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default EditForm