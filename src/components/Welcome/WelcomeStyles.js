import styled from 'styled-components';
import backgroundImage from '../../img/kai-pilger-Ef6iL87-vOA-unsplash.jpg';
import StarWarsLogo from '../../img/star-wars-logo-transparent.png'

const WelcomeBgd = styled.div `
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    overflow: hidden;
`

const WelcomeLogo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    background-image: url(${StarWarsLogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 10%;

`

const EnterButton = styled.button`
    border: none;
    background-color: transparent;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    font-size: 2rem;
    color: #adb5bd;
    cursor: pointer;

    display: flex;
    text-align: center;
    margin: 5% auto 0 auto;
    transition: border-bottom-color 0.3s;

    &:hover {
        text-shadow: 0 0 7.5px white;
    }
`

export { WelcomeBgd, WelcomeLogo, EnterButton };
