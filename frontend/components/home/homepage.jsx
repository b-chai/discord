import React from "react"
import { Link } from "react-router-dom"
import GreetingContainer from "../greeting/greeting_container"

const Homepage = (props) =>{
    return(
        <div className="homepage">
            <div className="splash-top">
                <header className="navbar">
                    <Link to="/">
                        <h1>Discord Clone</h1>
                    </Link>
                    <GreetingContainer/>
                </header>
                
                <div className="intro">
                    <div>Imagine a place...</div>
                    <div>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</div>
                    <button>Get Started</button>
                    <img src="app\assets\images\discord_splash.png" alt="splash image" />
                </div>
            </div>
            
            <div>
                <div> Create an invite-only place where you belong</div>
                <div>Discord servers are organized into topic-based channels where you can collaborate,share, and just talk about your day without clogging up a group chat.</div>
                <img src="discord_splash2.png" alt="second splash image" />
            </div>

            <div>
                <div>Where hanging out is easy</div>
                <div>Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.</div>
                <img src="discord_splash3" alt="third splash image" />
            </div>

            <div>
                <div>From few to a fandom</div>
                <div>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</div>
            </div>

            <div>
                <div>Reliable Tech For Staying Close</div>
                <div>Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</div>
                <img src="discord_splash4" alt="fourth splash image" />
            </div>

            <footer>Imagine a place</footer>
        </div>
    )
}

export default Homepage