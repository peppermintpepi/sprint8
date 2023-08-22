import React from "react";
import { Link } from 'react-router-dom';
import { WelcomeBgd, WelcomeLogo, EnterButton } from "./WelcomeStyles";

// Exercici 5 --> pàgina de benvinguda
const Welcome = () => {
    return (
        <div>
            <WelcomeBgd>
                <WelcomeLogo></WelcomeLogo>
                <Link to='/ships'>
                    <EnterButton>ENTER</EnterButton>
                </Link>
            </WelcomeBgd>
        </div>
    )
}

export default Welcome;
