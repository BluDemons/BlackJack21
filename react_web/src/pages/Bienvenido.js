/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Link} from 'react-router-dom';

const PageWelcome = () => {
    const image = require('../assets/balck.jpg');
    return(
        <div className="h-screen font-sans"
        style={{ backgroundImage: `url(${image})`,backgroundRepeat:"no-repeat", backgroundSize:"100%"}}>
            <div className="h-screen w-screen  flex justify-center content-center flex-wrap">
                <p className="font-sans text-6xl text-white">♦♣Black Jack 21♥♠</p>
            </div>
            <Link to="/home">
            <div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
                <span className="bg-green-500 ">EMPEZAR!!</span>
            </div>
            </Link>
        </div>
    )
}

export default PageWelcome;