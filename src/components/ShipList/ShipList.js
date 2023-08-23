import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Ship from "../Ships/Ships";
import ShipInfo from '../ShipInfo/ShipInfo';           // Exercici 2
import { AppLogo, AuthenticationButtons, ViewMoreButton, MainMenu, CloseButton } from "./ShipListStyles";


// Exercici 1 --> accedir a l'api amb la informació de les naus
const ShipsList = () => {
    const [ships, setShips] = useState([]);
    const [selectedShip, setSelectedShip] = useState(null);
    
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
        setSelectedShip(ship);
    }

    const goBackToList = () => {
        setSelectedShip(null);
    }

    return (
        <div> 
            <AppLogo>
                <AuthenticationButtons>
                    <button>LOGIN</button>
                    <button>SIGN UP</button>
                </AuthenticationButtons>
            </AppLogo>
            <MainMenu>
                <Link to='/'>
                    <button>HOME</button>
                </Link>
                <Link to='/ships'>
                    <button>STARSHIPS</button>
                </Link>
            </MainMenu>
                {selectedShip ? (
                    <div>
                        <CloseButton onClick={goBackToList}>x</CloseButton>
                        <ShipInfo ship={selectedShip} />
                    </div>
                ) : (
                    <>
                    {ships.map((ship, index) => (
                        <div key={index}>
                            <Ship name={ship.name} model={ship.model} onClick={() => showShipInfo(ship)}/>
                        </div>
                    ))}
                    {nextPage && !loading && (
                        <ViewMoreButton onClick={fetchNextPage}>
                            VIEW MORE
                        </ViewMoreButton>
                    )}
                    {loading && (
                        <ViewMoreButton disabled>
                            Loading...
                        </ViewMoreButton>
                    )}
                </>
            )}
        </div>
    );
}

export default ShipsList;
