import React from "react";
import { BgdImg, NameTitle, CenteredContainer, MainContainer, TextContainer, TextDesign, PilotsText } from "./ShipInfoStyles";

// Exercici 2 --> component per renderitzar tota la informació de les naus
const ShipInfo = ({ ship }) => {
    const toCapitalLetter = (str) => {
        return str.toUpperCase();
    }

    return (
        <div>
            <BgdImg>
                <NameTitle>{toCapitalLetter(ship.name)}</NameTitle>

                    <CenteredContainer>
                        <p><b>MODEL:</b> {toCapitalLetter(ship.model)}</p>
                    </CenteredContainer>
                    <CenteredContainer>
                        <p><b>STARSHIP CLASS:</b> {toCapitalLetter(ship.starship_class)}</p>
                    </CenteredContainer>
                    <CenteredContainer>
                        <p><b>MANUFACTURER:</b> {toCapitalLetter(ship.manufacturer)}</p>
                    </CenteredContainer>
                    <CenteredContainer>
                        <p><b>OST:</b> {toCapitalLetter(ship.cost_in_credits)}</p>
                    </CenteredContainer>

                <MainContainer>
                    <TextContainer>
                        <TextDesign><b>CREW:</b> {toCapitalLetter(ship.crew)}</TextDesign>
                        <TextDesign><b>PASSENGER CAPACITY:</b> {toCapitalLetter(ship.passengers)}</TextDesign>
                        <TextDesign><b>CARGO CAPACITY:</b> {toCapitalLetter(ship.cargo_capacity)}</TextDesign>
                        <TextDesign><b>CONSUMABLES:</b>{toCapitalLetter(ship.consumables)}</TextDesign>
                    </TextContainer>

                    <TextContainer>
                        <TextDesign><b>LENGTH:</b> {toCapitalLetter(ship.length)}</TextDesign>
                        <TextDesign><b>MAXIMUM ATMOSPHERING SPEED:</b> {toCapitalLetter(ship.max_atmosphering_speed)}</TextDesign>
                        <TextDesign><b>HYPERDRIVE RATING:</b> {toCapitalLetter(ship.hyperdrive_rating)}</TextDesign>
                        <TextDesign><b>MAXIMUM SPEED IN REALSPACE:</b> {toCapitalLetter(ship.MGLT)}</TextDesign>
                    </TextContainer>
                </MainContainer>
                
                <PilotsText><b>PILOTS:</b> {toCapitalLetter(ship.pilots.join(', '))}</PilotsText>
            </BgdImg>
        </div>
    );
}

export default ShipInfo;
