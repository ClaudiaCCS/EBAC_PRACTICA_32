import './style.css'
import {useNavigate} from 'react-router-dom'

export default function Album({album, addLibrary}) {

    const navigate = useNavigate()
    const {idAlbum, strAlbumThumb, strAlbum, strArtist, intYearReleased} = album

    const verDetalles = () => {
        navigate(`/song/${idAlbum}`)
    }
    return (

        <div className = "main__central--cancion">
            <div>
                <img src = {require("../../img/icono_play.png")} className = "global__icono--chico" alt = "Sonando"/>
                <img src = {`${strAlbumThumb}`} className = "main__central--imgcancion" alt = "Foto del album"/>
                <p className = "global__texto--claro">{strAlbum}</p>
            </div>
            <div>
                <p className = "global__texto--muychico">{strArtist}</p>
            </div>
            <div>
                <p className = "global__texto--chico">{intYearReleased}</p>
                <img src = {require("../../img/icono_agregar.png")} className = "global__icono" onClick = {() => addLibrary(album)} alt = "Icono Agregar" title = "Agregar a mi Biblioteca"/>
                <button type = "button" className = "album__ver--detalles" onClick = {verDetalles}>Ver Detalles</button>
            </div>
        </div>
                    
    )
}