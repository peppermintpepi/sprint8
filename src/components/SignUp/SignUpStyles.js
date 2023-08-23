import styled from 'styled-components';
import StarWarsLogo from '../../img/star-wars-logo-994.png'
import backgroundImage from '../../img/kai-pilger-Ef6iL87-vOA-unsplash.jpg';

const AppLogo = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    margin-top: 2rem;
    background-image: url(${StarWarsLogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media only screen and (max-width: 640px) {
        flex-direction: row;
    }
`

const SignUpBgn = styled.div `
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    overflow: hidden;
`

const MainContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    height: 70vh;
    width: 65%;
    border: none;
    background-color: white;
    border-radius: 40px;
    
    & > * {
        margin-left: 2.5rem;
        margin-right: 2.5rem;
      }
`

const InfoText = styled.p `
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    color: #495057;
`

const InfoAdditionalText = styled.p `
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    color: #495057;
    font-size: 0.75rem;
`

const InputData = styled.input `
    margin-left: auto;
    margin-right: auto;
    border: none;
    border-radius: 10px;
    background-color: #dee2e6;
    width: 90%;
    padding: 0.75rem;

    border: ${({ hasError }) => (hasError ? ' 3px solid #f44336' : '#ccc')};
`

const LoginButton = styled.button `  
    border: none;
    border-radius: 50px;
    background-color: #f5cb5c;
    color: #343a40;
    width: 95%;
    padding: 1rem;
    font-weight: bold;
`

const CloseButton = styled.button `
    position: fixed;
    top: 2rem; 
    right: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: white;
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

const ErrorText = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.75rem;
    color: #f44336;
    margin-top: 0.25rem;
`

export { AppLogo, SignUpBgn, MainContainer, InputData, InfoText, InfoAdditionalText, LoginButton, CloseButton, ErrorText };
