import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerio from 'cheerio';
import { PilotsContainer, PilotImage } from "./PilotsStyles";

// Exercici 8 --> importar els pilots
const Pilots = ({ pilots }) => {
    const [pilotsData, setPilotsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPilots = async () => {
            try {
                const pilotInfoPromises = pilots.map(async (pilotUrl) => {
                    try {
                        const response = await axios.get(pilotUrl);
                        const imageUrl = await getCharacterImage(response.data.url);
                        return { ...response.data, imageUrl };
                    } catch (error) {
                        console.error("Error fetching pilot data", error);
                        return null;
                    }
                });

                const pilotsInfo = await Promise.all(pilotInfoPromises);
                setPilotsData(pilotsInfo);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching pilots", error);
            }
        };

        fetchPilots();
    }, [pilots]);

    const getCharacterImage = async (characterUrl) => {
        try {
            const response = await axios.get(
                `https://starwars-visualguide.com/assets/img/characters/${getCharacterId(characterUrl)}.jpg`,
                {
                    responseType: "blob",
                }
            );
            return URL.createObjectURL(response.data);
        } catch (error) {
            console.error("Error fetching character image", error);
            return null;
        }
    };

    const getCharacterId = (characterUrl) => {
        const id = characterUrl.split('/').filter(Boolean).slice(-1)[0];
        return id;
    };
    

    return (
        <div>
            {pilotsData.length === 0 ? (
                <p>There are no related items for this category</p>
            ) : (
                <PilotsContainer className="pilots-container">
                    {pilotsData.map((pilot, index) => (
                        <PilotImage key={index} className="pilot-item">
                            {pilot.imageUrl && <img src={pilot.imageUrl} alt={pilot.name} />}
                        </PilotImage>
                    ))}
                </PilotsContainer>
            )}
        </div>
    );
}

export default Pilots;
