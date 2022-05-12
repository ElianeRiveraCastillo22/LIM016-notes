import { Link } from "react-router-dom";
import '../login/login.scss';
const noteStorm= require("../../img/noteStorm.png");
const google= require("../../img/google.png")
function Login(){
    return(
        <div className="containerLogin">
            <img className="logoNoteStorm" src={noteStorm} alt="" />
            <div className="formLogin">
                <input placeholder="Correo electronico" type="text" />
                <input placeholder="Contraseña" type="text" />
                <div className="recuperarContraseña">
                    <p>Recuperar contraseña</p>
                </div>
                <button>Iniciar sesión</button>
                <div className="textLinkRegistro">
                    <p>¿No tienes una cuenta? <Link to="registro">únete</Link></p>
                    <p>o inicia sesión con:</p>
                </div>
            </div>
            <img  className="logoGoogle" src={google} alt="" />
        </div>
    )
}
export default Login