import React, { useReducer } from 'react';
import SettingsStyles from '../styles/SettingsStyles';


const Settings = () => {
    return (
        <SettingsStyles>
        <div className="settings-container">
            <h4>Configuración</h4>
            <div className="ajustes-container">
                <div className="datos-personales">
                    <h5>Datos personales</h5>
                    <div className="name-container">
                        <p><span>Nombre de usuario:</span> Vinyet</p>
                        <button>Editar</button>
                    </div>
                    <div className="email-container">
                        <p><span>Correo electrónico:</span> vinyetescribano@protonmail.com</p>
                        <button>Editar</button>
                    </div>
                    <div className="password-container">
                        <p><span>Contraseña</span></p>
                        <button>Editar</button>
                    </div>
                </div>
            </div>
        </div>
        </SettingsStyles>
    )
}

export default Settings;