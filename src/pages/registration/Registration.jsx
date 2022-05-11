import { Link } from 'react-router-dom';

const imgLogo = require ('../../img/noteStorm.png');

function Registration(){
    return(
        <div>
            <img className="logo-NoteStorm" src={imgLogo} alt=""/>
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Correo electrónico"/>
            <input type="text" placeholder="Contraseña"/>
            <button> Registrarme </button>
            <p> ¿Ya tienes una cuenta? <Link to="/"> Iniciar sesión </Link> </p>
            <p> O inicia sesión con: </p>
            <img src="" alt=""/>
        </div>
        
    )
}
export default Registration;