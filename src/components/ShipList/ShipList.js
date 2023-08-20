import React, { useState, useEffect } from "react";
import ReactDOMServer from 'react-dom/server'
import Ship from "../Ships/Ships";
import ShipInfo from '../ShipInfo/ShipInfo';           // Exercici 2

// Exercici 1 --> accedir a l'api amb la informació de les naus
const ShipsList = () => {
    const [ships, setShips] = useState([]);
    
    // Exercici 3 --> crear la paginació
    const [nextPage, setNextPage] = useState(null);
    const [loading, setLoading] = useState(false);

    // Exercici 1 --> utilitzar useEffect per accedir a l'api
    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/`)
        .then(response => response.json())
        .then(data => {
            setShips(data.results);
            // Exercici 3 --> configurar la pàgina següent
            setNextPage(data.next);
        });
    }, []);

    // Exercici 3 --> carregar la següent pàgina
    const fetchNextPage = async () => {
        if (nextPage) {
            setLoading(true);
            const response = await fetch(nextPage);
            const data = await response.json();
            setShips(prevShips => [...prevShips, ...data.results]);
            setNextPage(data.next);
            setLoading(false);
        }
    };

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
            <button onClick={fetchNextPage} disabled={loading}>
                {loading ? "Loading..." : "View More"}
            </button>
        </div>
    );
}

export default ShipsList;
