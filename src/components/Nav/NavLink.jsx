import React, {useState} from 'react';

function NavLink(props) {

    const [isMouseOver, setMouseOver] = useState(false);
    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <a href={'#/'+ props.page} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={isMouseOver? "nav-link-mouse-over" : "nav-link"}>{props.page}</a>
    );
}

export default NavLink;