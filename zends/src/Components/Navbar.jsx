import { Link, useLocation } from 'react-router-dom';


function Navbar() {
    const location = useLocation();

    return (
        <nav className="bg-transparent z-10 font-pop">
            <ul className="text-lg flex gap-3 ml-3 text-white flex-wrap">
                <li className={`${location.pathname === '/' ? 'border-b-2 px-2 border-cyan-500 text-cyan-500 hover:tracking-widest transition-all ' : 'px-2 border-cyan-500 hover:border-b-2 hover:tracking-widest hover:text-cyan-500 transition-all'}`}>
                    <Link to="/">HOME</Link>
                </li>

                <li className={`${location.pathname === '/Contato' ? 'border-b-2 px-2 border-cyan-500 text-cyan-500 hover:tracking-widest transition-all ' : 'px-2 border-cyan-500 hover:border-b-2 hover:tracking-widest hover:text-cyan-500 transition-all'}`}>
                    <Link to="/Contato">CONTATO</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;