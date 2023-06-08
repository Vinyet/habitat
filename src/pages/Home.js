import React from 'react';
import HomeStyles from '../styles/HomeStyles';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web'


const Home = () => {
    const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 300 }, });
    return (
        <HomeStyles>
        <animated.div style={props} className="home-container">
            <div className="claim-container">
                <h1>HABITAT</h1>
                <h2><em>Controla tus hábitos, domina tu vida</em></h2>
                <Link to="/signup"><button>COMENZAR</button></Link>
            </div>
        </animated.div>
        </HomeStyles>
    )
}

export default Home;