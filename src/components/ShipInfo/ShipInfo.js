import React from "react";

// Exercici 2 --> component per renderitzar tota la informació de les naus
const ShipInfo = ({ ship }) => {
    const toCapitalLetter = (str) => {
        return str.toUpperCase();
    }

    return (
        <div>
            <h2>{ship.name}</h2>
            <p><b>MODEL:</b> {toCapitalLetter(ship.model)}</p>
            <p><b>STARSHIP CLASS:</b> {toCapitalLetter(ship.starship_class)}</p>
            <p><b>MANUFACTURER:</b> {toCapitalLetter(ship.manufacturer)}</p>
            <p><b>OST:</b> {toCapitalLetter(ship.cost_in_credits)}</p>

            <p><b>CREW:</b> {toCapitalLetter(ship.crew)}</p>
            <p><b>PASSENGER CAPACITY:</b> {toCapitalLetter(ship.passengers)}</p>
            <p><b>CARGO CAPACITY:</b> {toCapitalLetter(ship.cargo_capacity)}</p>
            <p><b>CONSUMABLES:</b>{toCapitalLetter(ship.consumables)}</p>

            <p><b>PILOTS:</b> {toCapitalLetter(ship.pilots.join(', '))}</p>

            <p><b>LENGTH:</b> {toCapitalLetter(ship.length)}</p>
            <p><b>MAXIMUM ATMOSPHERING SPEED:</b> {toCapitalLetter(ship.max_atmosphering_speed)}</p>
            <p><b>HYPERDRIVE RATING:</b> {toCapitalLetter(ship.hyperdrive_rating)}</p>
            <p><b>MAXIMUM SPEED IN REALSPACE:</b> {toCapitalLetter(ship.MGLT)}</p>
        </div>
    );
}

export default ShipInfo;
