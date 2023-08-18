import React, { useState, useEffect } from "react";
import Ship from "../Ships/Ships";

// Exercici 1 --> accedir a l'api amb la informació de les naus
const ShipsList = () => {
    const [ships, setShips] = useState([]);

    // utilitzar useEffect per accedir a l'api
    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/`)
        .then(response => response.json())
        .then(data => setShips(data.results));
    }, []);

    return (
        <div>
            {ships.map((ship, index) => (
                <Ship key={index} name={ship.name} model={ship.model}/>
            ))}
        </div>
    );
}

export default ShipsList;
