import React from 'react';
import AboutStyles from '../styles/AboutStyles';
import { useSpring, animated } from '@react-spring/web'


const About = () => {
    const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 300 }, });
    return (
        <AboutStyles>
        <animated.div style={props} className="about-container">
            <section>
                <h2>¿QUÉ es Habitat?</h2>
                <p>Habitat es una aplicación para hacer seguimiento de hábitos que te ayuda a establecer metas diarias, registrar tu progreso y visualizarlo con el tiempo. Ya sea que quieras leer más, hacer más ejercicio o desarrollar cualquier otro hábito, Habitat puede ayudarte a mantenerte en el buen camino.</p>
            </section>
            <section>
                <h2>¿POR QUÉ usar Habitat?</h2>
                <ul>
                <li><span>&rarr;</span> Establecer metas diarias para tus hábitos</li>
                <li><span>&rarr;</span> Registrar tu progreso con facilidad</li>
                <li><span>&rarr;</span> Visualizar tu progreso a lo largo del tiempo con gráficos claros y concisos</li>
                <li><span>&rarr;</span> Recibe recordatorios para ayudarte a mantenerte en el camino correcto</li>
                <li><span>&rarr;</span> Comparte tu progreso con otros para mantenerte responsable y motivado.</li>
                </ul>
            </section>
            <section>
                <h2>¿QUIÉN ha creado Habitat?</h2>
                <p>Habitat fue creado por Vinyet Escribano, una desarrolladora de React con pasión por el seguimiento de hábitos y el crecimiento personal.</p>
            </section>
        </animated.div>
        </AboutStyles>
    )
}

export default About;