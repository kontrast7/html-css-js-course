import React from 'react';
import './style.css';
import logo from '../files/img/logo.svg';

class Header extends React.Component {
render(){
    return(
        <div className="header">
        <div className="header-container">
            <div className="header-logo">
                <div className="humburger">
                    <div></div>
                </div>
                <a href="#" className="header-logo-name">
                    <img src={ logo } alt="logo"/>Grid
                </a>
            </div>

            <div className="header-items">
                <a href="#" className="header-item">How it works</a>
                <div className="dots"></div>
                <a href="#" className="header-item">Who we are</a>
                <div className="dots"></div>
                <a href="#" className="header-item">What we do</a>
                <div className="dots"></div>
                <a href="#" className="header-item">Contact us</a>

            </div>
            <a href="#" className="sign-in">Sign In</a>
        </div>
    </div>
    )
}

}

export default Header;