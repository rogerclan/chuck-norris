import React from 'react';
import logo from '../assets/Chuck-norris-002.jpg';
import '../styles/logo.scss';

const Logo = () => {
    return (
        <div className="chuck-logo">
            <img className="chuck-logo__img" src={logo} alt="Chuck Norris" />
        </div>
    );
};

export default Logo;