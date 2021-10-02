import React from 'react'
import { withRouter } from 'react-router-dom'
import ServerForm from './server_form'
import ServerUpdateForm from './server_update_form'

class ServerIndex extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     currentServer = this.props.server[0]
        // }
    }

    componentDidMount(){
        this.props.fetchAllServers()
    }

    // display(){
    //     const form = document.querySelector('.server-update-form')
    //     if (form.style.display === "none"){
    //         form.style.display = "block"
    //     }else{
    //         form.style.display = "none"
    //     }
    // }

    selectServer(server){
        // this.props.showServer(server)
        // .then(()=>this.props.history.replace(`servers/${server.id}`))
        this.props.history.replace(`servers/${server.id}`)
        console.log(this.props)
    }

    render(){
        const allServers = this.props.server.map(ele => {
            return (
                <div key={ele.id}>
                    <div className="server-update-form">
                        <ServerUpdateForm 
                        editServer={this.props.editServer} 
                        deleteServer={this.props.deleteServer} 
                        server={ele}/>
                    </div>
                    
                    <button className="server-button" onClick={()=>this.selectServer(ele)} >
                        {ele.serverName[0].toUpperCase()}
                    </button>
                </div>
            )
        })
        // console.log("-----------------")
        // console.log(this.props)
        // console.log(this.props.match.params)
        // console.log("-----------------")
        return(
            <div className="flex">
                {/* server sidebar */}
                <div className="server-list">
                    {allServers}
                    <ServerForm createServer={this.props.createServer}/>
                </div>
            </div>
        )
    }
}

export default withRouter(ServerIndex)