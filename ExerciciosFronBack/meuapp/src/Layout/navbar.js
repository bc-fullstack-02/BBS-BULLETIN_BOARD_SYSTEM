import { Link } from "react-router-dom";
import Container from './Container'
import styles from './navbar.module.css';
const Navbar = () => {
    return (
        <Container>
            <nav>
                <ul>
                    <li class={styles.item}>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li>
                        <Link to="/usuarios">Usuarios</Link>
                    </li>
                </ul>
            </nav>
            
        </Container>
    );
}
export default Navbar;