import React from "react"
import { Link } from "react-router-dom"

const Homepage = (props) =>{
    return(
        <div className="homepage">
            <div className="splash-top">
                <div>Imagine a place...</div>
                <div>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</div>
                <button>Get Started</button>
                <img src="app\assets\images\discord_splash.png" alt="splash image" />
            </div>
            <div> Create an invite-only place where you belong</div>
            <div>Where hanging out is easy</div>
            <div>From few to a fandom</div>
            <div>Reliable Tech For Staying Close</div>
            <footer>Imagine a place</footer>
        </div>
    )
}

export default Homepage