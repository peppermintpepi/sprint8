import styled from 'styled-components';
import StarWarsLogo from '../../img/star-wars-logo-994.png'

// Exercici 4 --> disseny app
const AppLogo = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    background-image: url(${StarWarsLogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media only screen and (max-width: 640px) {
        flex-direction: row;
    }
`

const AuthenticationButtons = styled.div `
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 10rem;

    button {
        border: none;
        background-color: transparent;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: lighter;
        font-size: 0.8rem;
        color: #adb5bd;
        cursor: pointer;
        margin-left: 10px;
        transition: border-bottom-color 0.3s;

        &:hover {
            text-shadow: 0 0 7.5px white;
        }
    }

    @media only screen and (max-width: 768px) {
        margin-right: 5rem;
    }

    @media only screen and (max-width: 640px) {
        align-items: center;
        margin-top: 7rem;
        margin-right: auto;
    }
`
const MainMenu = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    border-top: 1px solid #adb5bd;
    margin-top: 1rem;

    button {
        border: none;
        background-color: transparent;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: lighter;
        font-size: 0.8rem;
        color: #adb5bd;
        cursor: pointer;

        border-left: 1px solid #adb5bd;
        border-right: 1px solid #adb5bd;
        padding: 1rem;
        transition: border-bottom-color 0.3s;

        &:hover {
            border-bottom: 0.25rem solid #007bff;
        }

    }

    border-bottom: 1px solid #adb5bd;

    @media only screen and (max-width: 640px) {
        margin-top: 2rem;
    }
`

const ViewMoreButton = styled.button `
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 10rem;
    border: none;
    background-color: transparent;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    color: #adb5bd;
    cursor: pointer;

    &:hover {
        text-shadow: 0 0 7.5px white;
    }

    @media only screen and (max-width: 768px) {
        margin-right: 5rem;
    }
`
const CloseButton = styled.button `
    position: fixed;
    top: 180px; 
    right: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: #adb5bd;
    border-radius: 50%;
    height: 2rem;
    width; 3rem;
    padding: 0.75rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    font-size: 1.5rem;
    color: black;
    cursor: pointer;
    margin-left: 10px;
    transition: border-bottom-color 0.3s;

    &:hover {
        text-shadow: 0 0 7.5px white;
    }
`

export { AppLogo, AuthenticationButtons, ViewMoreButton, MainMenu, CloseButton };
