import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); 
    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setErrorMessage('Todos os campos são obrigatórios!');
        } else {
            setErrorMessage('');
            onLogin(email, password);
            navigate('/'); 
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="logo-container">
                    <img src="/imagens/logo-Branco.png" alt="Logo" className="login-logo" />
                </div>
                <h2>Entrar</h2>
                {errorMessage && <p className="error">{errorMessage}</p>}

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                        required
                    />
                </div>

                <button type="submit" className="login-button">Entrar</button>
            </form>
        </div>
    );
};

export default Login;
