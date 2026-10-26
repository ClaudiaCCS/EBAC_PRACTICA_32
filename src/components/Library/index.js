
import LibrarySong from '../LibrarySong/index'


export default function Library({dataLibrary, removeLibrary}) {
        
    return (

        

        <div className= "main__izquierda">
        
        <div className = "main__izquierda--biblioteca global__contenedor">
            <div className = "main__izquierda--tubiblioteca">
                <div>
                    <img src = {require("../../img/icon_list.svg").default} className = "global__icono" alt = "Icono List"/>
                    <p className = "global__texto--comun">Tu biblioteca</p>
                </div>
            </div>
            <div className = "main__izquierda--listado">
                {dataLibrary.map((album) => {
                    return (
                        <LibrarySong
                            key = {album.idAlbum}
                            album = {album}
                            removeLibrary = {removeLibrary} 
                        />
                    )
                })}                             
            </div>
        </div>
    </div>

                    
    )
}