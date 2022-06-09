import Logo from './../assets/img/logo.jpg';
import './Header.css';

function Header() {
    return (

        <header>
            <div >
                <img src={Logo} alt="logo" className="logo"></img>
            </div>
            <div>
                <button class="btn-azul"><i class="fas fa-power-off"></i>Ingresar</button>
                <button class="btn-morado"><i class="fas fa-user-plus"></i>Registrar</button>
            </div>
        </header>
    );
}
export default Header;

