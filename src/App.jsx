import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Comunidade from './Comunidade';
import Corridas from './Corridas';
import Estatisticas from './Estatisticas';
import Header from './Header';
import Inscricao from './Inscricao';
import Live from './Live';
import Login from './Login';
import Loja from './Loja';
import VideoPlayer from './VideoPlayer';
import './index.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [corridas, setCorridas] = useState([]);

  const handleLogin = (email, password) => {
    console.log('Autenticado com:', email, password);
    setIsAuthenticated(true);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetch('/data/corridasData.json')
        .then((response) => response.json())
        .then((data) => setCorridas(data))
        .catch((error) => console.error("Erro ao carregar os dados das corridas:", error));
    }
  }, [isAuthenticated]);

  const navigate = useNavigate();

  const handleProximaPagina = () => {
    console.log("Ir para a próxima página");
    navigate('/corridas');
  };

  return (
    <div className="app-container">
      {isAuthenticated ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Live />} />
            <Route
              path="/corridas"
              element={
                <Corridas
                  corridas={corridas}
                  onProximaPagina={handleProximaPagina}
                />
              }
            />
            <Route path="/corrida/:id" element={<VideoPlayer />} />
            <Route path="/comunidade" element={<Comunidade />} />
            <Route path="/estatisticas" element={<Estatisticas />} />
            <Route path="/inscricao" element={<Inscricao />} /> { }
            <Route path="/loja" element={<Loja />} /> { }
          </Routes>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
