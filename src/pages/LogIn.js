import React, { useState } from 'react';
import LogInStyles from '../styles/LogInStyles';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


const LogIn = () => {
    const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 300 }, });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const auth = getAuth(); 
          await signInWithEmailAndPassword(auth, email, password); 
          console.log('Logged in');
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <LogInStyles>
        <animated.div style={props} className="login-container">
            <p>¿Nuevo aquí? <Link to="/signup">Regístrate</Link></p>
            <form onSubmit={handleLogin}>
                <label>Correo electrónico</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Contraseña</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Iniciar sesión"></input>
            </form>
        </animated.div>
        </LogInStyles>
    )
}

export default LogIn;