import React from 'react';
import logo from '../img/logo.png';

const Welcome = (props) => {
    return (
        <div className="Welcome-Row">
            <div className="Col-1">
                <img
                width={100}
                height={100}
                src={logo}
                alt="App Logo"
                />
            </div>
            <div className="Col-2">
                <h2>Welcome to The Foot'BB'all App - Home of your favourite ball game</h2>
            </div>
            <div className="Col-3">
                <button>Know More!</button>
            </div>
        </div>
    );
};

export default Welcome;