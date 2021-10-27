import * as userUtil from '../util/user_api_util'

export const RECEIVE_USERS = "RECEIVE_USERS"
export const RECEIVE_USER = "RECEIVE_USER"

export const receiveAllUsers = users => {
    return({
        type: RECEIVE_USERS,
        serverUsers: users
    })
}

export const receiveUser = user => {
    return({
        type: RECEIVE_USER,
        user
    })
}

export const fetchAllUsers = () => dispatch => {
    return userUtil.fetchAllUsers()
    .then(res => dispatch(receiveAllUsers(res)))
}

export const editUser = user => dispatch => {
    return userUtil.editUser(user)
    .then(res => dispatch(receiveUser(user)))
}