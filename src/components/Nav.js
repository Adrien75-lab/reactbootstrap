import React from 'react';
import { BsList, BsX } from 'react-icons/bs';

import { NavHashLink } from 'react-router-hash-link';

class Nav extends React.Component{

    state = {
        mobileNav: false
    }

    toggleMobileNav = () => {
        this.setState(prevState => ({
            mobileNav: !prevState.mobileNav
        }))
    }

    render(){
        return(
            <nav id="navbar" className={"navbar order-last order-lg-0 " + (this.state.mobileNav ? "navbar-mobile" : null)}>
          <ul>
            <li><NavHashLink to="/#hero" className="nav-link scrollto" exact={true}  onClick={(this.state.mobileNav ? ()=>this.toggleMobileNav() : null )}>Home</NavHashLink></li>
            
            <li><NavHashLink to="/portfolio#portfolio" className="nav-link scrollto" onClick={(this.state.mobileNav ? ()=>this.toggleMobileNav() : null )}>ApiFetch</NavHashLink></li>
          
            <li><NavHashLink to="/ToDoList#ToDoList" className="nav-link scrollto" onClick={(this.state.mobileNav ? ()=>this.toggleMobileNav() : null )}>Todo-List</NavHashLink></li>
          
            <li><NavHashLink className="nav-link scrollto" to="/contact#contact" onClick={(this.state.mobileNav ? ()=>this.toggleMobileNav() : null )}>Contact</NavHashLink></li>
          </ul>
          <i className="mobile-nav-toggle" onClick={()=>this.toggleMobileNav()}><BsList /></i>
          <i className={"mobile-nav-toggle " + (this.state.mobileNav ? "bi-x" : "nodisplay")}  onClick={()=>this.toggleMobileNav()}><BsX /></i>
        </nav>
        )
    }
}
export default Nav