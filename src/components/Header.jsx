import React from 'react';
import HoverLink from './HoverLink';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
    render(){
        return (
        <header>
            <div className="navContainer">
            
                        
                <div className="logo">
                    
                    <NavLink to="/"><h1>THAI-VAGNEN</h1></NavLink>
                    
                </div>
                <nav>
    
                    <ul>
                        <li><HoverLink to="/menu">Menu</HoverLink ></li>
                        <li><HoverLink to="/kontaktaOss">Kontakta oss</HoverLink ></li>
                        <li><HoverLink to="/omOss">Om oss</HoverLink ></li>
                        <li><HoverLink to="/table">Tabell</HoverLink ></li>
                    </ul>
                
            </nav>
        </div>     
        </header>
        )
    }
}

export default Header;