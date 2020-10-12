import React from 'react';

import "../styles/Components/UserFieldRegister.css";

const UserFieldRegister = (props) => {
    return (
        <div className="register-user-container">
            <p className="register-user-title">Digite o Email para permitir o cadastro de um novo colaborador:</p>
            <input className="register-user-input" placeholder="Digite o email..."></input>
        </div>
    )
}

export default UserFieldRegister;