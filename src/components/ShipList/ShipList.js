import React, { useState, useEffect } from "react";
import ReactDOMServer from 'react-dom/server'
import Ship from "../Ships/Ships";
import ShipInfo from '../ShipInfo/ShipInfo';           // Exercici 2

// Exercici 1 --> accedir a l'api amb la informació de les naus
const ShipsList = () => {
    const [ships, setShips] = useState([]);
    
    // Exercici 2 --> estat per la nau seleccionada i poder ensenyar la informació
    const [selectedShip, setSelectedShip] = useState(null);

    // Exercici 1 --> utilitzar useEffect per accedir a l'api
    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/`)
        .then(response => response.json())
        .then(data => setShips(data.results));
    }, []);

    // Exercici 2 --> obrir informació de la nau seleccionada
    const showShipInfo = (ship) => {
        const shipInfoHtml = ReactDOMServer.renderToStaticMarkup(<ShipInfo ship={ship} />);
        const newWindow = window.open("", "_blank");

        if (newWindow) {
            newWindow.document.write("<html><body>");
            newWindow.document.write(shipInfoHtml);
            newWindow.document.write("</body></html>");
            newWindow.document.close();
        }
    }

    return (
        <div>
            {ships.map((ship, index) => (
                <div key={index}>
                  <Ship name={ship.name} model={ship.model} onClick={() => showShipInfo(ship)}/>
                </div>
            ))}
        </div>
    );
}

export default ShipsList;
