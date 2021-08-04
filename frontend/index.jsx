import React from 'react'
import ReactDOM from 'react-dom'
import * as sessionAPIUtil from './util/session_api_util'
import configureStore from './store/store'
import Root from './components/root'


document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.querySelector("#root")
    const store = configureStore()

    window.login = sessionAPIUtil.login
    window.logout = sessionAPIUtil.logout
    window.signup = sessionAPIUtil.signup

    window.getState = store.getState
    window.dispatch = store.dispatch

    console.log(window.login)
    ReactDOM.render(<Root store={store}/>,root)
})