import React from "react";

// Exercici 1 --> renderitzar cada nau per pantalla
const Ship = ({ name, model, onClick }) => {
    // renderitzar la información en majúscules
    const toCapitalLetter = (str) => {
        return str.toUpperCase();
    }

    return (
        <div onClick={onClick}>
            <p><b>{toCapitalLetter(name)}:</b> {toCapitalLetter(model)}</p>
        </div>
    );
}

export default Ship;
