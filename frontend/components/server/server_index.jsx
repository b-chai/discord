import React from 'react'

class ServerIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componendDidMount(){
        this.props.fetchAllServers
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default ServerIndex