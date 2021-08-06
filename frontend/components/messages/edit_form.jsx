import React from "react"

class EditForm extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {body: ''}
    }

    handleChange(e){
        this.setState({
            body: e.target.value
        })
    }

    handleSubmit(){
        this.props.sendMessage(this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder='type here' onChange={e=>this.handleChange(e)} value={this.state.body}/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default EditForm