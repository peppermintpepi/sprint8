import styled from 'styled-components';

const PilotsContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
`

const PilotImage = styled.div`
    margin: 10px;
    width: 15%;
    height: 15%;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #01baef; 
        border-radius: 50%; 
        box-sizing: border-box; 
    }
`

export { PilotsContainer, PilotImage };
