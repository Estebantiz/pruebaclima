import React from 'react';


function Header({titulo}) {
    return(
    <nav>
        <div ClassName="nav-wrapper light-orange darken-2">
            <a href="#!" className="brand-logo">{titulo}</a>

        </div>
    </nav>
    )
}

export default Header;