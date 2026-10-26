import imgLogo from '../../img/logo.png'
import imgPerfil from '../../img/perfil.png'
import './style.css'

function Header(){
    
    return (
        <div className = "header global__contenedor">
            <img src = {imgLogo} alt = "LOGO"/>
            <h1>Sound<span>Gloss</span></h1>
            <img src = {imgPerfil} alt = "Icono de perfil"/>
        </div>
    )
}

export default Header;