import React from 'react'
import ServerForm from './server_form'

class ServerIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllServers()
    }

    render(){
        const allServers = this.props.server.map(ele => {
            return (
                <div>
                    <button className="server-button">
                        {ele.id}
                    </button>
                </div>
            )
        })

        return(
            <div>
                {allServers}
                <ServerForm createServer={this.props.createServer}/>
            </div>
        )
    }
}

export default ServerIndex