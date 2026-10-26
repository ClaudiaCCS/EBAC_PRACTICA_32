
import SearchResults from '../../components/SearchResults/index'
import Library from '../../components/Library/index'
import {useState, useEffect} from 'react'
import useFetchSong from '../../Hooks/useFetchSong'

function Principal() {

    const {songs, isLoading, error, searchSongs} = useFetchSong()


    //Lista de canciones de la biblioteca
    const [dataLibrary, setDataLibrary] = useState([])

    //Estados creados para identificar cuando se Agregan o Eliminan canciones del Library
    const [lastAddedSong, setLastAddedSong] = useState(null);
    const [lastRemovedSong, setLastRemovedSong] = useState(null);

    useEffect(() => {
        if (lastAddedSong) {
            console.log(
                `Canción agregada a tu biblioteca: ${lastAddedSong.strAlbum}`
            );
        }
    }, [lastAddedSong]);

    useEffect(() => {
        if (lastRemovedSong) {
            console.log(
                `Canción eliminada de Mi Biblioteca: ${lastRemovedSong.strAlbum}`
            );
        }
    }, [lastRemovedSong]);

    //Función para añadir a la Library

    const addLibrary = (song) => {
        if (dataLibrary.some((item) => item.id === song.id)) {
            return
        }

        setDataLibrary((prev) => [...prev, song])
        setLastAddedSong({ ...song })
    }


    //Función para eliminar de Library
    const removeLibrary = (id) => {
        const songToRemove = dataLibrary.find(
            (song) => song.idAlbum === id
        )

        if (!songToRemove) return

        setDataLibrary((prev) => 
            prev.filter((song) => song.idAlbum !== id)
        )

        setLastRemovedSong({ ...songToRemove });
    }

  return (
    <>
    <div className = "main__principal">

        <SearchResults
            songs = {songs}
            addLibrary = {addLibrary}
            onSearch = {searchSongs}
            isLoading = {isLoading}
            error = {error}
        />       

        

        <Library 
            dataLibrary = {dataLibrary}
            removeLibrary = {removeLibrary}
        />
        
    </div>
        
    </>
  );
}

export default Principal;

