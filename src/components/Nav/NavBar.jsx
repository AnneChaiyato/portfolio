import React from 'react';
import NavLink from './NavLink';

function NavBar() {
    return (
        <header>
            <nav className="nav-container">
                    <a className='logo-link' href='#/'><img className="logo-image" src='assets/logo.png' alt='' loading='lazy'/></a>
                    <div className="nav-link-container">
                        <NavLink page='home'/>
                        <NavLink page='about'/>
                        <NavLink page='portfolio'/>

                    </div>
                    
            </nav>
            
        </header>
            
            );

}

export default NavBar;