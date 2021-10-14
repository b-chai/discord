import * as userUtil from '../util/user_api_util'

export const RECEIVE_USERS = "RECEIVE_USERS"

export const receiveAllUsers = users => {
    return({
        type: RECEIVE_USERS,
        serverUsers: users
    })
}

export const fetchAllUsers = () => dispatch => {
    return userUtil.fetchAllUsers()
    .then(res => dispatch(receiveAllUsers(res)))
}