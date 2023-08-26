import React, { useState, useEffect } from "react";
import axios from "axios";
import { BgdImg, NameTitle, CenteredContainer, MainContainer, TextContainer, TextDesign, PilotsText,
ImageContainer, Image, UnderLine } from "./ShipInfoStyles";

// Exercici 2 --> component per renderitzar tota la informació de les naus
const ShipInfo = ({ ship }) => {

    const [image, setImage] = useState(null);

    const toCapitalLetter = (str) => {
        return str.toUpperCase();
    }


    useEffect(() => {
        const getImage = async () => {
          try {
            const response = await axios.get(
              `https://starwars-visualguide.com/assets/img/starships/${getShipId(
                ship.url
              )}.jpg`,
              {
                responseType: "blob",
              }
            );
            const imageUrl = URL.createObjectURL(response.data);
            setImage(imageUrl);
          } catch (error) {
            console.error("Error fetching image", error);
          }
        };
      
        getImage();
      }, [ship]);  
    const getShipId = (shipUrl) => {
        const id = shipUrl.split('/').filter(Boolean).slice(-1)[0];
        return id;
    }

    return (
        <div>
            <BgdImg>
                <NameTitle>{toCapitalLetter(ship.name)}</NameTitle>
                <ImageContainer>
                    {image && (
                        <Image src={image} alt={toCapitalLetter(ship.name)} style={{ width: "100%" }} /> 
                    )}
                    { image && <UnderLine /> }
                </ImageContainer>
                
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
