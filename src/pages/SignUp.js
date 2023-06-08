import React, { useState } from 'react';
import SignUpStyles from '../styles/SignUpStyles';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";



const SignUp = () => {
    const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 300 }, });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err)  {
            console.error(err)
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <SignUpStyles>
        <animated.div style={props} className="signup-container">
            <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
            <form onSubmit={handleFormSubmit}>
                <label>Correo electrónico</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Contraseña</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                {error && <p>{error}</p>}
                <input type="submit" value="Comenzar"></input>
            </form>
            <button className="google-btn" onClick={signInWithGoogle}><FaGoogle style={{ marginRight: '8px', fontSize: '18px' }} />Inicia sesión con Google</button>
        </animated.div>
        </SignUpStyles>
    )
}

export default SignUp;