import { useState } from 'react';
import axios from 'axios';

const useFetchSong = () => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchSongs = async (artist) => {
        if (!artist.trim()) return;

        try {
            setIsLoading(true);
            setError(null);

            console.log("Iniciando búsqueda:", artist);

            const response = await axios.get(
                `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${(artist.trim())}`
            );

            console.log("Respuesta de la API:", response.data);

            setSongs(response.data.album ?? []);
        } catch (error) {
            console.error("Error al buscar álbumes:", error);
            setError(error);
            setSongs([]);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        songs,
        isLoading,
        error,
        searchSongs
    };
};

export default useFetchSong;