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
        
        // const channelId = this.props.channels.forEach(channel => {
        //     if (channel.serverId === this.props.match.params.serverId){
        //         return channel.serverId
        //     }
        // })

        // const channelId = this.props.channels.indexOf(this.props.match.params.serverId)

        // console.log('-------------')
        // console.log(this.props)
        // console.log(this.props.channels[0].serverId)
        // console.log(this.props.match.params.serverId)
        // console.log(channelId)
        // console.log('-------------')

        // todo - grab first channel id of server
        this.props.history.replace(`/servers/${server.id}/${this.props.channels[0].id}`);
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
                    {allServers}
                    <ServerForm createServer={this.props.createServer}/>
                </div>
            </div>
        )
    }
}

export default withRouter(ServerIndex)