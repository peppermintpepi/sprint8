import React from "react";

// Exercici 1 --> renderitzar cada nau per pantalla
const Ship = ({ name, model }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{model}</p>
        </div>
    );
}

export default Ship;
