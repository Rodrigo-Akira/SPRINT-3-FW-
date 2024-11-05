import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleCorridasClick = () => {
    navigate('/corridas');
  };

  const handleLiveClick = () => {
    navigate('/'); 
  };

  const handleComunidadeClick = () => {
    navigate('/comunidade');
  };

  const handleEstatisticasClick = () => {
    navigate('/estatisticas');
  };

  const handleInscricaoClick = () => {
    navigate('/inscricao'); 
  };

  const handleLojasClick = () => {
    navigate('/loja'); 
  };

  return (
    <header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <img 
        src="/imagens/logo-Branco.png" 
        alt="Logo" 
        className="Logo" 
        onClick={handleLiveClick} 
        style={{ cursor: 'pointer' }} 
      />
      <nav className="navbar">
        <a onClick={handleLiveClick} style={{ cursor: 'pointer' }}>Ao Vivo</a>
        <a onClick={handleCorridasClick} style={{ cursor: 'pointer' }}>+Corridas</a>
        <a onClick={handleComunidadeClick} style={{ cursor: 'pointer' }}>Comunidade</a>
        <a onClick={handleEstatisticasClick} style={{ cursor: 'pointer' }}>Estatísticas</a>
        <a onClick={handleLojasClick} style={{ cursor: 'pointer' }}>Loja</a>
      </nav>

      {}
      {isAuthenticated ? (
        <div className="profile-container" style={{ width: '44px', height: '44px', marginRight: '140px' }}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <circle cx="12" cy="9" r="3" stroke="#ffffff" strokeWidth="1.5"></circle>
              <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5"></circle>
              <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
            </g>
          </svg>
        </div>
      ) : (
        <button className="subscribe-button" onClick={handleInscricaoClick}>
          + Inscrever-se
        </button>
      )}
    </header>
  );
};

export default Header;
