import styled from 'styled-components';
import backgroundImage from '../../img/kai-pilger-Ef6iL87-vOA-unsplash.jpg';

// Exercici 4 --> maquetació app
const BgdImg = styled.div `
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: auto;
    padding: 2rem;
`

const ImageContainer = styled.div `
    position: relative;
`

const Image = styled.img `
    width: auto;
`

const UnderLine = styled.div `
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #01baef;
`

const NameTitle = styled.h1 `
    color: #adb5bd;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    padding: 0.5rem;
`

const CenteredContainer = styled.div`
    display: flex;
    flex-display: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    color: #adb5bd;
    margin-bottom: -1.5rem;
`
const TextDesign = styled.p `
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    color: #adb5bd;
    margin-bottom: -0.5rem;
`

const PilotsText = styled.p `
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    color: #adb5bd;
    margin-left: 5rem;
    margin-top: 3rem;
`

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    color: #adb5bd;
    margin: 2rem; /* Ajusteu l'espai segons les vostres preferències */
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    margin-top: 3rem;
    width: 45%; 
    margin-left: 3rem;
`

export { BgdImg, NameTitle, CenteredContainer, MainContainer, TextContainer, TextDesign, PilotsText, ImageContainer, Image, UnderLine };
