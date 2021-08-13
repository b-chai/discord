import * as serverUtil from '../util/server_api_util'

export const RECEIVE_SERVER = "RECEIVE_SERVER"
export const RECEIVE_SERVERS = "RECEIVE_SERVERS"
export const REMOVE_SERVER = "REMOVE_SERVER"

export const receiveAllServers = servers => ({
    type: RECEIVE_SERVERS,
    servers
})

export const receiveServer = server => ({
    type: RECEIVE_SERVER,
    server
})

export const removeServer = serverId => ({
    type: REMOVE_SERVER,
    serverId
})

export const fetchAllServers = () => dispatch => {
    return serverUtil.fetchAllServers()
    .then(res=> dispatch(receiveAllServers(res)))
}

export const createServer = server => dispatch => {
    return serverUtil.createServer(server)
    .then(res=> dispatch(receiveServer(res)))
}

export const showServer = server => dispatch => {
    return serverUtil.showServer(server)
    .then(res=> dispatch(receiveServer(server)))
}

export const editServer = server => dispatch => {
    return serverUtil.editServer(server)
    .then(res=> dispatch(receiveServer(server)))
}

export const deleteServer = serverId => dispatch => {
    return serverUtil.deleteServer(serverId)
    .then(res=> dispatch(removeServer(serverId)))
}