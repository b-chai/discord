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

        const getChannels = () => {
            // serverId comes out as a string
            const serverId = Number(this.props.match.params.serverId)
            const allChannels = this.props.channels
        
            let selectedChannels = [];
            for (let i = 0; i < allChannels.length; i++) {
                if (allChannels[i].serverId === serverId) selectedChannels.push(allChannels[i]);
            }
        
            return selectedChannels;
        }

        const firstChannel = getChannels()[0].id

       

        // todo - grab first channel id of server
        const info = {type: 'index', id: firstChannel}
        App.cable.subscriptions.subscriptions[0].load(info);
        this.props.history.replace(`/servers/${server.id}/${firstChannel}`);
    }

    selectDM(){
        this.props.history.replace('/servers/dm')
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

        return(
            <div className="flex">
                {/* server sidebar */}
                <div className="server-list">

                    <button className="server-button" onClick={()=>this.selectDM()}>
                        DM
                    </button>

                    <hr className="divider"/>

                    {allServers}
                    <ServerForm createServer={this.props.createServer} createChannel={this.props.createChannel}/>
                </div>
            </div>
        )
    }
}

export default withRouter(ServerIndex)