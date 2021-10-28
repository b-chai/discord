import React from "react"
import { Link } from "react-router-dom"
import GreetingContainer from "../greeting/greeting_container"

const Homepage = (props) =>{

    return(
        <div className="homepage">
                    <div className='header-links'>
                        
                        <a href='https://github.com/b-chai' className='personal-link' target="_blank">
                            <img className="github" src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="github logo"  />
                        </a>

                        <a href='https://www.linkedin.com/in/ben-chai/' className='personal-link' target="_blank">
                            <img className="linkedin" src="https://www.logolynx.com/images/logolynx/a1/a1a79ac6433198c0bfb70a444a755017.png" alt="linkedin logo" />
                        </a>
                    </div>
            <div>
                <div className="navbar">
                    <Link to="/">
                        <img className="logo" src={window.logo} alt="logo" />
                    </Link>
                    <GreetingContainer/>
                </div>
                
                <div className="intro">
                    <img className="splash-image" src={window.splash1} alt="first splash image" />
                    <div className="splash1-text">
                        <div className="top-text1">IMAGINE A PLACE...</div>
                        <div className="top-text2">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</div>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="splash2-text">
                    <div className="title"> Create an invite-only place where you belong</div>
                    <div className="subtext">Discord servers are organized into topic-based channels where you can collaborate,share, and just talk about your day without clogging up a group chat.</div>
                </div>
                <img className="splash-image" src={window.splash2} alt="second splash image" />
            </div>

            <div>
                <div className="splash3-text">
                    <div className="title">Where hanging out is easy</div>
                    <div className="subtext">Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.</div>
                </div>
                <img className="splash-image" src={window.splash3} alt="third splash image" />
            </div>

            <div>
                <div className="splash4-text">
                    <div className="title">From few to a fandom</div>
                    <div className="subtext">Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</div>
                </div>
                <img className="splash-image" src={window.splash4} alt="fourth splash image" />
            </div>

            <div>
                <div className="splash5-text">
                    {/* <div className="bottom-title">Reliable Tech For Staying Close</div>
                    <div className= "subtext">Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</div> */}

                </div>
                <img className="splash-image" src={window.splash5} alt="fifth splash image" />

            <div className='footer-links'>
                <a href='https://github.com/b-chai' className='personal-link' target="_blank">
                    <img className="github" src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="github logo"  />
                </a>
                
                <a href='https://www.linkedin.com/in/ben-chai/' className='personal-link' target="_blank">
                    <img className="linkedin" src="https://www.logolynx.com/images/logolynx/a1/a1a79ac6433198c0bfb70a444a755017.png" alt="linkedin logo" />
                </a>
            </div>

            </div>


            {/* <footer>Imagine a place</footer> */}
        </div>
    )
}

export default Homepage