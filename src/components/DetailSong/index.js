import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'

function DetailSong() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [album, setAlbum] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                setIsLoading(true)
                setError(null)

                const response = await axios.get(
                    `https://www.theaudiodb.com/api/v1/json/123/album.php?m=${(id)}`
                )

                const albumData = response.data.album

                if (albumData && albumData.length > 0) {
                    setAlbum(albumData[0])
                } else {
                    setAlbum(null)
                }
            } catch (error) {
                console.error('Error al consultar el álbum:', error)
                setError('No se pudieron cargar los detalles del álbum.')
            } finally {
                setIsLoading(false)
            }
        };

        fetchAlbum()
    }, [id])

    if (isLoading) {
        return (
            <main className = "detalle__album--pagina">
                <p className = "detalle__album--mensaje">"Cargando detalles del álbum..."</p>
            </main>
        )
    }

    if (error) {
        return (
            <main className = "detalle__album--pagina">
                <p className = "detalle__album--mensaje">{error}</p>
            </main>
        )
    }

    if (!album) {
        return (
            <main className = "detalle__album--pagina">
                <p className = "detalle__album--mensaje">No se encontró el álbum.</p>
            </main>
        )
    }

    return (
        <main className="detalle__album--pagina">
            <section className="detalle__album--principal">
                <div className="detalle__album--portada">
                    {album.strAlbumThumb ? (
                        <img src={album.strAlbumThumb} alt={`Portada de ${album.strAlbum}`} />
                    ) : (
                        <div className="detalle__album--sportada">
                            Sin portada disponible
                        </div>
                    )}

                    <p className="detalle__album--etiqueta">DETALLES DEL ÁLBUM</p>
                </div>

                <div className="detalle__album--informacion">
                    <button type="button" className="detalle__album--volver" onClick={() => navigate('/')}>← Volver al inicio</button>
                    <p className="detalle__album--artista">{album.strArtist || 'Artista desconocido'} </p>

                    <h1>{album.strAlbum || 'Álbum sin título'}</h1>

                    <div className="detalle__album--separador"></div>

                    <div className="detalle__album--datos">
                        <p> <span>Año de lanzamiento</span> <strong>{album.intYearReleased || 'No disponible'}</strong> </p>
                        <p> <span>Género</span> <strong>{album.strGenre || 'No disponible'}</strong> </p>
                        <p> <span>Estilo</span> <strong>{album.strStyle || 'No disponible'}</strong> </p>
                    </div>

                    <div className="detalle__album--descripcion">
                        <h2>Acerca del álbum</h2>
                        <p> {album.strDescription || 'No hay una descripción disponible para este álbum.'} </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetailSong;