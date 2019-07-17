import React from "react"
import { Link} from "gatsby"
import './header.scss'
import logo from "./../../assets/images/logo-final.svg"

import { Menu } from 'react-feather';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            toggleClass:'',
            animation:''
        };
    }

    addResponsiveClass = () => {
        const currentState = this.state.active;
        this.setState({ 
            active: !currentState, 
            toggleClass: this.state.toggleClass 
            === 'responsive' ? '' : 'responsive',
            animation: this.state.animation === 'animate' ? '': 'animate'
        
        });
        console.log("clicked");
    }
    render (){
        const { state: { toggleClass,animation } } = this;

        return(
            <div>
                <header className="header">
                    <div className={`classLogo ${toggleClass}`}>
                        <Link to="/">
                            <img src={logo} alt="Logo" className={`logo ${toggleClass}`} />
                        </Link>
                    </div>
                    <div className={`navbarItem ${toggleClass}`}>
                        <nav className="fixed-nav-bar">
                            <div className={`top-nav ${toggleClass}`}>

                                <div className={`cover-nav-item ${animation}`}>
                                    <div>
                                        <Link  className={`nav-item ${toggleClass}`} activeClassName="active-nav-item" to="/">The MEDISQUARE Experience</Link>
                                    </div>
                                    <div>
                                        <Link  className={`nav-item ${toggleClass}`} activeClassName="active-nav-item" to="/ourwork">Our Work</Link>
                                    </div>
                                    <div>
                                        <Link  className={`nav-item ${toggleClass}`} activeClassName="active-nav-item" to="/meettheteam">Meet the team</Link>
                                    </div>
                                    <div>
                                        <Link  className={`nav-item ${toggleClass}`} activeClassName="active-nav-item" to="/whatsnew">What's new?</Link>
                                    </div>
                                    <div>
                                        <Link className={`nav-item ${toggleClass}`} activeClassName="active-nav-item" to="/contactus">Get in touch</Link>
                                    </div>
                                </div>
                                
                                <div className={`nav-item-icon ${toggleClass}`} onClick={this.addResponsiveClass}>
                                    <div className="iconMenu">
                                        <Menu />
                                    </div>
                                    
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
            
          )
    }

}


export default Header