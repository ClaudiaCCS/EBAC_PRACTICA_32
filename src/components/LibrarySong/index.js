import './style.css'

export default function LibrarySong({album, removeLibrary}) {

    const {idAlbum, strAlbumThumb, strAlbum, strArtist, intYearReleased} = album

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
                <img src = {require("../../img/icono_eliminar.png")} className = "global__icono" onClick = {() => removeLibrary(idAlbum)} alt = "Icono Eliminar" title = "Eliminar de mi Biblioteca"/>
            </div>
        </div>
                    
    )
}