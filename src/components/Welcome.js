import React from 'react';
// import logo from '../img/logo.png';
import logo from '../img/FO.mp4';

const Welcome = (props) => {
    return (
        <div className="Welcome-content">
        <div className="Welcome-Row">
            <div className="Col-1 xs={12}">
                {/* <img
                width={100}
                height={100}
                src={logo}
                alt="App Logo"
                /> */}
                <video 
                width={100}
                height={100}
                src={logo}
                alt="App Logo"
                autoPlay
                loop
                muted
                />
            </div>
            <div className="Col-2 xs={12}">
                <h2>Welcome to The Foot'BB'all App<br />Home of your favourite ball game</h2>
            </div>
            <div className="Col-3 xs={12}">
                <button id="know-more-btn"><a href="#">Know More!</a></button>
            </div>
        </div>
        <div>
            <h3 style={{backgroundColor: "red", color: "white"}}>Welcome to the Beta Version of The FootBBall App. Final Version to follow soon.</h3>
        </div>
        </div>
    );
};

export default Welcome;