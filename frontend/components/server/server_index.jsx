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

    // display(){
    //     const form = document.querySelector(`.server-id-${server.id}`)
    //     if (form.style.display === "none"){
    //         form.style.display = "block"
    //     }else{
    //         form.style.display = "none"
    //     }
    // }

    
    selectServer(server){
        const firstChannel = server.channelIds[0]

        const info = {type: 'index', id: firstChannel}
        App.cable.subscriptions.subscriptions[0].load(info)
        
        this.props.history.replace(`/servers/${server.id}/${firstChannel}`);
    }

    selectDM(){
        this.props.history.replace('/servers/dm/1')
    }

    render(){

        // first server is for private DMs
        this.props.server.shift()
        
        const allServers = this.props.server.map(ele => {
            return (
                <div key={ele.id}>
                    <div className={`server-update-form server-id-${ele.id}`}>
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

        return(
            <div className="flex">
                {/* server sidebar */}
                <div className="server-list">

                    <button className="server-button" onClick={()=>this.selectDM()}>
                        DM
                    </button>

                    <hr className="divider"/>

                    {allServers}
                    <ServerForm createServer={this.props.createServer} createChannel={this.props.createChannel} currentUser={this.props.currentUser}/>
                </div>
            </div>
        )
    }
}

export default withRouter(ServerIndex)