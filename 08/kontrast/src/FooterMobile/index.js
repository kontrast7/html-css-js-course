import React from 'react';
import './style.css'
import fb from '../files/img/icon/fb.svg';
import int from '../files/img/icon/in.svg';
import sharp from '../files/img/icon/sharp.svg';
import twitter from '../files/img/icon/twitter.svg';


class FooterMobile extends React.Component {
render(){
    return(
    
        <div className="footer-mobile">
        <div className="container">
            <div className="footer-mobile-copir">Copyright © 2018 • Your Company<br/>All rights reserved</div>
            <div className="footer-mobile-sub">Made in Setproduct.com<br/>One man digital agency</div>
            <div className="footer-mobile-link">hello@setproduct.com</div>

            <div className="follow-img">
                <a href="#" className="img-block">
                    <img src={ fb } alt=""/>
                </a>
                <a href="#" className="img-block">
                    <img src={ int } alt=""/>
                </a>
                <a href="#" className="img-block">
                    <img src={ sharp } alt=""/>
                </a>
                <a href="#" className="img-block">
                    <img src={ twitter } alt=""/>
                </a>
            </div>
        </div>
    </div>

    
    )
}

}

export default FooterMobile;