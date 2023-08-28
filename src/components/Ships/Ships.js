import React from "react";
import { ShipFrame, ShipName, ShipModel } from "./ShipsStyles"; 

// Exercici 1 --> renderitzar cada nau per pantalla
const Ship = ({ name, model, onClick }) => {
    // renderitzar la información en majúscules
    const toCapitalLetter = (str) => {
        return str.toUpperCase();
    }

    return (
        <div onClick={onClick}>
            { /* Exercic 4 --> disseny app */ }
            <ShipFrame>
                <ShipName>{toCapitalLetter(name)} </ShipName>
                <ShipModel>{toCapitalLetter(model)}</ShipModel>
            </ShipFrame>
        </div>
    );
}

export default Ship;
