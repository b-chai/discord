import React from 'react'

class ServerUpdateForm extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            id: this.props.server.id,
            serverName: this.props.server.serverName,
            serverIcon: this.props.server.serverIcon,
            ownerId: this.props.server.ownerId,
        }
    }

    handleSubmit(){
        this.props.editServer(this.state)
    }

    updateName(e){
        this.setState({
            serverName: e.target.value
        })
    }

    display(){
        const form = document.querySelector('.server-update-form')
        if (form.style.display === "none"){
            form.style.display = "block"
        }else{
            form.style.display = "none"
        }
    }

    render(){
        return(
            <div>

                <div >
                    <button className="close-button" onClick={()=>this.display()}>X</button>
                    <div className="server-header">Edit your server</div>
                    <span className="server-subtext">Update the server information here.</span>

                    <form className="server-input" onSubmit={()=>this.handleSubmit()}>
                    <label className="server-subtext">Server Name
                    <br />
                        <input 
                        type="text" 
                        onChange={e=>this.updateName(e)}
                        value={this.state.serverName}/>
                    </label>
                    <br />
                    <input className="create-server-button"type="submit" value="Update Server" />
                    
                    <button onClick={()=>this.props.deleteServer(this.state.id)}>Delete Server {this.state.id}</button>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default ServerUpdateForm