import React from 'react';
import './style.css';
class Content extends React.Component {
render(){
    return(
        <div>
        <div className="container-backgroung">

        <div className="rectangle"></div>

        <div className="dotted"></div>
        </div>

    <div className="container">
        <div className="offer">
            <div className="container">
                <h1 className="offer-title">
                    Combine <span>fine<span className="block-fine"></span></span> images
                </h1>
                <h2 className="offer-subtitle">To represent a product</h2>
                <div className="grid-container">
                    <div className="text1 grid-text">Use mixed grid with imagery, replace with your own photos and descriptions
                    </div>
                    <div className="card1">We aimed to deliver HQ templates for Figma
                        <div className="subtitle-card">Used by 123 people
                        </div>
                    </div>
                    <a href="#" className="learn-more">Learn more</a>
                    <div className="text2 grid-text">This is multipurpose grid, it fits for portfolio, services or agency web site</div>
                    <div className="card2">
                        <div className="card_text">Consider it done!</div>
                    </div>
                    <div className="card5"></div>
                    <div className="card6"></div>
                    <div className="card3"></div>
                    <div className="card4">
                        <div className="card_text">See my goal?</div>
                    </div>
                    <div className="card7"></div>
                </div>
            </div>
        </div>
    </div>
 </div>
    )
}

}

export default Content;