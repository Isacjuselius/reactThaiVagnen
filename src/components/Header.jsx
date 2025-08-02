import React from 'react';
import { NavLink, Link} from 'react-router-dom';

class Header extends React.Component {
    render(){
        return (
        <header>
            <div class="navContainer">
            
                        
                <div class="logo">
                    
                    <NavLink to="/"><h1>THAI-VAGNEN</h1></NavLink>
                    
                </div>
                <nav>
    
                    <ul>
                        <li onmouseover="onButton(this)" onmouseout ="offButton(this)"><NavLink to="/menu">Menu</NavLink></li>
                        <li onmouseover="onButton(this)" onmouseout ="offButton(this)"><NavLink to="/kontaktaOss">Kontakta oss</NavLink></li>
                        <li onmouseover="onButton(this)" onmouseout ="offButton(this)"><NavLink to="/omOss">Om oss</NavLink></li>
                        <li onmouseover="onButton(this)" onmouseout ="offButton(this)"><NavLink to="/table">Tabell</NavLink></li>
                    </ul>
                
            </nav>
        </div>     
        </header>
        )
    }
}

export default Header;