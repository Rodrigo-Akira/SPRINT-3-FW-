import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
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
    <header className="header">
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
        <a onClick={handleLojasClick} style={{ cursor: 'pointer' }}>Loja</a> {}
      </nav>
      <button className="subscribe-button" onClick={handleInscricaoClick}>
        + Inscrever-se
      </button>
    </header>
  );
};

export default Header;
