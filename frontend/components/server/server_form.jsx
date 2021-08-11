import React from 'react'

class ServerForm extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            serverName: '',
            serverIcon: '',
            ownerId: 1,
        }
    }

    handleSubmit(){
        this.props.createServer()
    }

    updateName(e){
        console.log(this.state)
        this.setState({
            serverName: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label for="server name">Server Name
                    <input type="text" 
                    onChange={e=>this.updateName(e)}/>
                </label>
                <br />
                <label for="server name">Server Icon
                    <input type="text" />
                </label>
                <input type="submit" value="Create Server" />
                </form>
            </div>
        )
    }
}

export default ServerForm