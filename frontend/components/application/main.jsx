import React from "react";
import ServerContent from "../server_contents/server_contents";
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

        // console.log('-----------')
        // console.log(this.props)
        // console.log('-----------')

        this.props.fetchAllChannels()
        setTimeout(()=> this.setState({ loading: false}), 500)
    }

    componentDidUpdate(){

        console.log('===================')
        console.log(this.props)
        console.log('===================')
    }


    render(){
        
        return (

            this.state.loading ? 

            // Loading
            <div>
                Currently Loading
            </div>

            :

            // Finished loading
            <div className="flex">
    
                <ProtectedRoute path='/servers/:serverId/:channelId' component={ServerIndexContainer}/>
                <ProtectedRoute path='/servers/:serverId/:channelId' component={ServerContent}/>
            </div>
        )
    }
}

export default Application