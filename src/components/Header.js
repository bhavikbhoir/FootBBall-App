import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div>
                <h3 style={{backgroundColor: "red", color: "white"}}>Welcome to the Beta Version of The FootBBall App. Final Version to follow soon.</h3>
            </div>
            {props.children}
        </header>
    );
};

export default Header;