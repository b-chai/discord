import React from 'react'

class UserList extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllUsers()
    }

    render(){
        const listUsers = this.props.serverUsers.map(user => {
            return(
                <div className="users" key={user.id}>
                    <div className="user-avatar"/>
                    <div className="usernames">
                        {user.username}
                    </div>
                </div>
            )
        })

        return(
            <div className="user-list">
                <div className="user-list-header">
                    MEMBERS - {listUsers.length}
                </div>
                {listUsers}
            </div>
        )
    }
}

export default UserList