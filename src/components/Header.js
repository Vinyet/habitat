import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderStyles from '../styles/HeaderStyles';
import { signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';


const auth = getAuth();
const user = auth.currentUser;

const Header = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsLoggedIn(!!user);
            navigate('/profile');
        });
        return unsubscribe;
    }, [auth]);

    const logout = async () => {
        try {
            await signOut(auth);
            navigate('/');
            console.log('Logged out')
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <HeaderStyles>
        <header>
            <nav>
                <ul>
                    <Link to="/" style={{ textDecoration: 'none' }}><li>Inicio</li></Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}><li>¿De qué trata?</li></Link>
                    {isLoggedIn ? (
                        <li className="dropdown">
                            <Link to="/profile" style={{ textDecoration: 'none' }}><li>Mi cuenta</li></Link>
                            <ul className="dropdown-menu">
                                <Link to="/configuracion"><li>Configuración</li></Link>
                                <li onClick={logout}>Cerrar sesión</li>
                            </ul>
                        </li>
                    ) : (
                        <Link to="/signup" style={{ textDecoration: 'none' }}><li className="join-btn">Únete</li></Link>
                    )}
                </ul>
            </nav>
        </header>
        </HeaderStyles>
    )
}

export default Header;
