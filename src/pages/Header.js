import React from 'react'
import logo from "../img/logo.png"

const Header = () => {
    return (
        <div className="header">
            <div className="text"><p>lorem ipsum</p></div>
            <div className="logo"><img src={logo} alt="logo" /></div>
        </div>
    )
}
export default Header;