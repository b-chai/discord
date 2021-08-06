import React from "react"

class MessageForm extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <form action="">
                    <label>message
                        <input type="text" />
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default MessageForm