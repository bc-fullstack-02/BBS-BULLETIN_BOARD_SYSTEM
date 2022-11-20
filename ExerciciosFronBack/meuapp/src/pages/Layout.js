import {Outlet, Link} from 'react-router-dom';


const layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Contato">Contato</Link>
                    </li>
                    <li>
                        <Link to="/usuarios">Usuários</Link>
                    </li>
                </ul>
            </nav>
            
        </>
    )
}
export default layout;
