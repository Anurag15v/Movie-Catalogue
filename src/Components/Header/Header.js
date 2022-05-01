import React from 'react'
import './Header.css'
function Header() {
    return (
        <div>
            <h1 onClick={() => window.location.href = "/"} className='logo'>NETFLEX</h1>
        </div>
    )
}

export default Header