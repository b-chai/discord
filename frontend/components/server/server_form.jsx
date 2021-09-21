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
        console.log(this.state)
        this.props.createServer(this.state)
        this.state.serverName = ''
    }

    updateName(e){
        this.setState({
            serverName: e.target.value
        })
    }

    display(){
        const form = document.querySelector('.server-form')
        if (form.style.display === "none"){
            form.style.display = "block"
        }else{
            form.style.display = "none"
        }
    }

    render(){
        return(
            <div>
                <button className="form-activator" onClick={()=>this.display()}>+</button>

                <div className='server-form'>
                    <button className="close-button" onClick={this.display}>X</button>
                    <div className="server-header">Customize your server</div>
                    <span className="server-subtext">Give your new server a personality with a name and an icon. You can always change it later.</span>

                    <form className="server-input" onSubmit={this.handleSubmit}>
                    <label className="server-subtext">Server Name
                    <br />
                        <input 
                        type="text" 
                        onChange={e=>this.updateName(e)}
                        value={this.state.serverName}/>
                    </label>
                    <br />
                    <input className="create-server-button"type="submit" value="Create Server" />
                    </form>
                </div>
            </div>
        )
    }
}

export default ServerForm