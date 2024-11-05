import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inscricao.css';

const Inscricao = ({ onLogin }) => { 
    const [cadastroCompleto, setCadastroCompleto] = useState(false); 
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setCadastroCompleto(true); 

        
        const email = event.target.email.value;
        const password = event.target.password.value; 

      
        onLogin(email, password); 

        event.target.reset();
        
        setTimeout(() => {
            setCadastroCompleto(false);
            navigate('/'); 
        }, 3000);
    };

    const handleNavigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="inscricao-container">
            {cadastroCompleto && <div className="cookie-notification">Cadastro completo com sucesso!</div>}
            
            <h2>Inscrição</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Digite seu email" required />

                <label htmlFor="username">Usuário:</label>
                <input type="text" id="username" placeholder="Digite seu usuário" required />

                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" placeholder="Digite sua senha" required />

                <button type="submit" className="submit-button">Enviar</button>
            </form>

            <p className="login-redirect">
                Se você já tem conta, <span onClick={handleNavigateToLogin} className="login-link">clique em entrar</span>.
            </p>
        </div>
    );
};

export default Inscricao;
