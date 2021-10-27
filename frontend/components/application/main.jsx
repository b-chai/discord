import React from "react";
import ServerContentContainer from "../server_contents/server_contents_container";
import DMContent from "../server_contents/dm_contents";
import ServerIndexContainer from "../server/server_index_container";
import { ProtectedRoute } from '../../util/route_util';

// const Application = () => {

//     return (
//         <div className="flex">

            
//             <ProtectedRoute path='/servers/:serverId/:channelId' component={ServerIndexContainer}/>
//             <ProtectedRoute path='/servers/:serverId/:channelId' component={ServerContent}/>
//         </div>
//     )
// }

class Application extends React.Component {
    constructor(props){
        super(props)
        this.state = { loading: true }
    }

    componentDidMount(){
        this.props.fetchAllChannels()
        this.props.fetchAllServers()
        this.props.fetchAllUsers()
        setTimeout(()=> this.setState({ loading: false}), 500)
    }

    render(){
        
        return (

            this.state.loading ? 

            // Loading
            <div className="loading">
                Loading . . .
            </div>

            :

            // Finished loading
            <div className="flex">
    
                <ProtectedRoute path='/servers/:serverId/:channelId' component={ServerIndexContainer}/>
                <ProtectedRoute path='/servers/:serverId/:channelId' component={ServerContentContainer}/>

                {/* <ProtectedRoute path='/servers/dm/' component={ServerIndexContainer}/>
                <ProtectedRoute path='/servers/dm/' component={ServerContentContainer}/> */}

                {/* <ProtectedRoute path='/servers/dm/:roomId' component={ServerIndexContainer}/> */}
                {/* <ProtectedRoute path='/servers/dm/:roomId' component={ServerContentContainer}/> */}
                
                {/* <ProtectedRoute path='/servers/dm' component={DMContent}/> */}
                
            </div>
        )
    }
}

export default Application