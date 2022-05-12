import { Link } from 'react-router-dom';
import './registration.scss'

const imgLogo = require('../../img/noteStorm.png');
const imgGoogle = require('../../img/google.png')

function Registration(){
    return(
        <div className="containerRegistration">
            <img className="logoNoteStorm" src={imgLogo} alt=""/>

            <form className="infoContainer">
                <input type="text" placeholder="Nombre"/>
                <input type="text" placeholder="Correo electrónico"/>
                <input type="text" placeholder="Contraseña"/>
                <button className="btnRegister"> Registrarme </button>
            </form>

            <div className="loginContainer">
                <p> ¿Ya tienes una cuenta? <Link to="/"> Iniciar sesión </Link> </p>
                <p> O inicia sesión con: </p>
                <img className="logoGoogle" src={imgGoogle} alt=""/>
            </div>
        </div>
        
    )
}
export default Registration;