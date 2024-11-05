import React, { useEffect, useState } from 'react'; 
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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
    const [corridas, setCorridas] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [isAuthenticated, setIsAuthenticated] = useState(false); 
    const [userEmail, setUserEmail] = useState(''); 
    const ITEMS_PER_PAGE = 4; 

    useEffect(() => {
        fetch('/data/corridasData.json')
            .then((response) => response.json())
            .then((data) => setCorridas(data))
            .catch((error) => console.error("Erro ao carregar os dados das corridas:", error));
    }, []);

    const handleProximaPagina = () => {
        const totalPaginas = Math.ceil(corridas.length / ITEMS_PER_PAGE);
        if (paginaAtual < totalPaginas) {
            setPaginaAtual(paginaAtual + 1);
        }
    };

    const handlePaginaAnterior = () => {
        if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1);
        }
    };

    const corridasFiltradas = corridas.slice(
        (paginaAtual - 1) * ITEMS_PER_PAGE,
        paginaAtual * ITEMS_PER_PAGE
    );

    const handleLogin = (email, password) => {
        
        setIsAuthenticated(true);
        setUserEmail(email);
    };

    return (
        <div className="app-container">
            <Header isAuthenticated={isAuthenticated} userEmail={userEmail} /> {}
            <Routes>
                <Route path="/" element={<Live />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/corridas" element={
                    <Corridas
                        corridas={corridasFiltradas}
                        onProximaPagina={handleProximaPagina}
                        onPaginaAnterior={handlePaginaAnterior}
                        paginaAtual={paginaAtual}
                        totalPaginas={Math.ceil(corridas.length / ITEMS_PER_PAGE)}
                    />
                } />
                <Route path="/corrida/:id" element={<VideoPlayer />} />
                <Route path="/comunidade" element={<Comunidade />} />
                <Route path="/estatisticas" element={<Estatisticas />} />
                <Route path="/inscricao" element={<Inscricao onLogin={handleLogin} />} />
                <Route path="/loja" element={<Loja />} />
            </Routes>
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
