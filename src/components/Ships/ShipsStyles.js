import styled from 'styled-components';

// Exercici 4 --> maquetació app
const ShipFrame = styled.div `
    background-color: #272829;
    padding: 0.5rem;
    margin: 1rem;
    margin-left: 10rem;
    margin-right: 10rem;

    @media only screen and (max-width: 768px) {
        margin-left: 5rem;
        margin-right: 5rem;
    }
`

const ShipName = styled.p `
    font-family: Arial, Helvetica, sans-serif;
    font-weight: light;
    font-size: 1.1rem;
    color: #ced4da;
    margin-top: 0.5rem;   
    margin-bottom: 0.5rem;
    margin-left: 0.75rem;
`

const ShipModel = styled.p `
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    font-size: 0.8rem;
    color: #ced4da;
    margin-top: 0.5rem;   
    margin-bottom: 0.5rem;
    margin-left: 0.75rem;
`

export { ShipFrame, ShipName, ShipModel };
