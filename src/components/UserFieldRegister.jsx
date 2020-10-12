import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { adminRegister, resetAdminRegister } from '../redux/actions/auth';

import "../styles/Components/UserFieldRegister.css";

const UserFieldRegister = (props) => {
    const [email, setEmail] = useState('')
    const currentRole = useSelector(state => state.main.currentUser.role);
    const successAdminRegister = useSelector(state => state.auth.successAdminRegister);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetAdminRegister())
    }, [])

    
    return (
        <div className="register-user-container">
            <p className="register-user-title">Digite o Email para permitir o cadastro de um novo colaborador:</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="register-user-input" placeholder="Digite o email..."></input>
            <button className="register-user-button" onClick={() => dispatch(adminRegister(email, currentRole))}>Cadastrar</button>
            {successAdminRegister === false && successAdminRegister != undefined && 
                <p style={{color: "red"}}>Erro ao cadastrar um novo colaborador!</p>
            }
            {successAdminRegister === true && 
                <p style={{color: "#008000"}}>Sucesso ao cadastrar um novo colaborador!</p>
            }
        </div>
    )
}

export default UserFieldRegister;