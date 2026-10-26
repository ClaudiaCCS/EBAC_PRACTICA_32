import Song from '../Song'
import Album from '../Album'
import './style.css'
import {useState} from 'react'

export default function SearchResults({songs, addLibrary, onSearch, isLoading, error}) {

    const [artist, setArtist] = useState('')

    const handleSearch = () => {
        onSearch(artist)
    }

    return (

        <div className= "main__izquierda">
        <div className = "main__izquierda--biblioteca global__contenedor">
            <div className = "main__izquierda--tubiblioteca">
                <div>
                    <p className = "global__texto--comun">Buscador de canciones</p>
                </div>
            </div>
            
            <div className = "main__izquierda--buscar">
                <p className = "main__izquierda--buscarlabel">Nombre del artista:</p>
                <input 
                    id = "main__izquierda--buscarcancion" 
                    type = "text" 
                    placeholder = "Buscar artista"
                    value = {artist}
                    onChange = {(e) => setArtist(e.target.value)}
                    onKeyDown = {(e) => {
                        if (e.key === 'Enter') handleSearch()
                    }}
                />
                <button type = "button" onClick = {handleSearch}> <img src = {require("../../img/icon_search.svg").default} className = "global__icono--chico" alt = "Icono Search"/></button>
                
            </div>
            <div className = "main__izquierda--listado">

                {isLoading && <p>Buscando álbumes...</p>}

                    {error && <p>No se pudieron cargar los álbumes.</p>}

                    {!isLoading && !error && songs.map((album) => (
                        <Album
                            key={album.idAlbum}
                            album={album}
                            addLibrary={addLibrary}
                        />
                    ))}

                    {!isLoading && !error && songs.length === 0 && (
                        <p>No hay álbumes para mostrar.</p>
                    )}                
                    
            </div>
        </div>
    </div>

                    
    )
}