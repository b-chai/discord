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
                    <label for="server name" className="server-subtext">Server Name
                    <br />
                        <input type="text" 
                        onChange={e=>this.updateName(e)}/>
                    </label>
                    <br />
                    {/* <label for="server name">Server Icon
                        <input type="text" />
                    </label> */}
                    <input type="submit" value="Create Server" />
                    </form>
                </div>
            </div>
        )
    }
}

export default ServerForm