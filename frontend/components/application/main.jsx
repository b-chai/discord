import React from "react";
import ServerContent from "../../server_contents/server_contents";
import ServerIndexContainer from "../server/server_index_container";
import { ProtectedRoute } from '../../util/route_util';

const Application = () => {
    return (
        <div className="flex">
            <ProtectedRoute path='/servers' component={ServerIndexContainer}/>
            <ProtectedRoute path='/servers/:channelId' component={ServerContent}/>
            {/* <Route path='/:serverId/:channelId' component={ServerContent}/> */}
        </div>
    )
}

export default Application