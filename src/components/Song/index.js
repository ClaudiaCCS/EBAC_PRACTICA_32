import './style.css'

export default function Song({song, addLibrary}) {

    
    const {id, image, nombre, artista, duracion} = song

   
    return (

        <div className = "main__central--cancion">
            <div>
                <img src = {require("../../img/icono_play.png")} className = "global__icono--chico" alt = "Sonando"/>
                <img src = {`../../img/${image}`} className = "main__central--imgcancion" alt = "Foto de canción"/>
                <p className = "global__texto--claro">{nombre}</p>
            </div>
            <div>
                <p className = "global__texto--muychico">{artista}</p>
            </div>
            <div>
                <p className = "global__texto--chico">{duracion}</p>
                <img src = {require("../../img/icono_agregar.png")} className = "global__icono" onClick = {() => addLibrary(song)} alt = "Icono Agregar"/>  
            </div>
        </div>
                    
    )
}