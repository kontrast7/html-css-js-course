import React from 'react';
import './style.css'
import fb from '../files/img/icon/fb.svg';
import int from '../files/img/icon/in.svg';
import sharp from '../files/img/icon/sharp.svg';
import twitter from '../files/img/icon/twitter.svg';
import wave from '../files/img/footer-wave.jpg';


class Footer extends React.Component {
render(){
    return(
    <div>
        <div className="container-backgroung-foot">
        <div className="rectangle-foot"></div>
        <div className="dotted-foot"></div>
        </div>

<div className="footer">
<div className="container">
    <div className="grid-footer">
        <div className="follow-block">
            <div className="follow-text">follow us</div>
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
        <div className="follow-block2">
            <div className="follow-text2">follow us</div>
            <span><a href="#" className="follow-link2">hello@fapsterapp.com</a></span>
        </div>
        <div className="info-block">
            <div className="info-text">information</div>
            <div className="c1">
                <a href="#">About Fapster app</a><br/>
                <a href="#">Get in Touch</a><br/>
                <a href="#">Things We Like</a>
            </div>
            <div className="c2">
                <a href="#">Onhovered / Active</a><br/>
                <a href="#">Privacy Policy</a><br/>
                <a href="#">Terms of Service</a>
            </div>
            <div className="c3">
                <a href="#">We are hiring!</a><br/>
                <a href="#">Resources</a>

            </div>
        </div>

        <div className="keep">
            <div className="keep-text">keep in touch</div>
            <form action="" className="keep-form">
            <div class="name-form">
                            <input class="namestyle" type="text" name="name" placeholder="Your name" required/>
                        </div>
                        <div class="email-form">
                            <input class="emailstyle" type="email" name="email" required placeholder="E-mail"/>
                        </div>
                        <div class="message-form">
                            <input class="textstyle" type="text" name="message" required placeholder="Leave your message"/>
                        </div>


                <button className="btn-form" type="submit">SEND</button>
            </form>
        </div>
    </div>

</div>

<img className="wave" src={ wave } width="100%" height="102px" alt="wave"/>
</div>

</div>
    )
}

}

export default Footer;