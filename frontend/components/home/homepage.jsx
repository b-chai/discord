import React from "react"
import { Link } from "react-router-dom"
import GreetingContainer from "../greeting/greeting_container"
import splashImage from "../../images/discord_splash1.png"
import splashImage2 from "../../images/discord_splash2.png"
import splashImage3 from "../../images/discord_splash3.png"
import splashImage4 from "../../images/discord_splash4.png"
import splashImage5 from "../../images/discord_splash5.png"

const Homepage = (props) =>{
    return(
        <div className="homepage">
            <div>
                <div className="navbar">
                    <Link to="/">
                        <h1>Discord Clone</h1>
                    </Link>
                    <GreetingContainer/>
                </div>
                
                <div className="intro">
                    <img className="splash1" src={splashImage} alt="splash image" />
                    <div className="splash1-text">
                        <div className="top-text1">IMAGINE A PLACE...</div>
                        <div className="top-text2">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</div>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="splash2-text">
                    <div> Create an invite-only place where you belong</div>
                    <div>Discord servers are organized into topic-based channels where you can collaborate,share, and just talk about your day without clogging up a group chat.</div>
                </div>
                <img src={splashImage2} alt="second splash image" />
            </div>

            <div>
                <div className="splash3-text">
                    <div>Where hanging out is easy</div>
                    <div>Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.</div>
                </div>
                <img src={splashImage3} alt="third splash image" />
            </div>

            <div>
                <div className="splash4-text">
                    <div>From few to a fandom</div>
                    <div>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</div>
                </div>
                <img src={splashImage4} alt="fourth splash image" />
            </div>

            <div>
                <div className="splash5-text">
                    <div>Reliable Tech For Staying Close</div>
                    <div>Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</div>

                </div>
                <img src={splashImage5} alt="fifth splash image" />
            </div>

            <footer>Imagine a place</footer>
        </div>
    )
}

export default Homepage