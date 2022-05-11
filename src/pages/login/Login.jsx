import { Link } from "react-router-dom";
const noteStorm= require("../../img/noteStorm.png");
function Login(){
    return(
        <div>
            <img className="logo-NoteStorm" src={noteStorm} alt="" />
            <input type="text" />
            <input type="text" />
            <button>Iniciar sesión</button>
            <p>¿No tienes una cuenta? únete <Link to>únete</Link></p>
            <p>o inicia sesión con:</p>
            <img src="" alt="" />
        </div>

    )
}
export default Login