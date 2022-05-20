 import { useState,useContext } from 'react'; 
import { Link } from 'react-router-dom';
import './registration.scss'
 import { UserContext } from '../../context/userProvider';

const imgLogo = require('../../img/noteStorm.png');
const imgGoogle = require('../../img/google.png')

function Registration(){
        const [password, setPassword]= useState("");
        const [email,setEmail]=useState("");


        const {registerUser} = useContext (UserContext);
            const handleSubmit = async (e)=>{
                e.preventDefault()
                console.log("procesando form", email,password)
                try{
                    await registerUser(email,password);
                    console.log("usuario creado");
                }catch(error){
                    console.log(error.code)
                }
            }

    return(
        <div className="containerRegistration">
            <div className="containerImg">
                <img className="logoNoteStorm" src={imgLogo} alt=""/>
            </div>

            <div className="formContainer">
                <form onSubmit={handleSubmit} className="infoContainer">
                    <input
                    type="text"
                    placeholder="Nombre"/>
                    <input
                        type="email"
                        value={ email }
                        onChange={e=>setEmail(e.target.value)}
                        placeholder="Correo electrónico"/>
                    <input
                        type="password"
                        value={ password }
                        onChange={e=>setPassword(e.target.value)}
                        placeholder="Contraseña"/>
                    <button className="btnRegister"> Registrarme </button>
                </form>

                <div className="loginContainer">
                    <p> ¿Ya tienes una cuenta? <Link to="/"> Iniciar sesión </Link> </p>
                    <p> O inicia sesión con: </p>
                    <img className="logoGoogle" src={imgGoogle} alt=""/>
                </div>
            </div>

        </div>
    )
}
export default Registration;