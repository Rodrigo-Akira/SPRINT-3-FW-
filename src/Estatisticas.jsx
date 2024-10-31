import React, { useEffect, useState } from 'react';
import estatisticasData from '../public/data/estatisticasData.json';
import './Estatisticas.css';

const Estatisticas = () => {
  const [activeTab, setActiveTab] = useState("equipes");
  const [pilotos, setPilotos] = useState([]);
  const [equipes, setEquipes] = useState([]);

  useEffect(() => {
    setPilotos(estatisticasData.pilotos);
    setEquipes(estatisticasData.equipes);
  }, []);

  const renderTable = () => {
    if (activeTab === "equipes") {
      return (
        <table className="estatisticas-table">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Equipe</th>
              <th>Pontos</th>
            </tr>
          </thead>
          <tbody>
            {equipes.map((equipe, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{equipe.nome}</td>
                <td>{equipe.pontos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return (
        <table className="estatisticas-table">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Piloto</th>
              <th>Equipe</th>
              <th>Pontos</th>
              <th>Vitórias</th>
            </tr>
          </thead>
          <tbody>
            {pilotos.map((piloto, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{piloto.nome}</td>
                <td>{piloto.equipe}</td>
                <td>{piloto.pontos}</td>
                <td>{piloto.vitorias}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div className="estatisticas-container">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === "equipes" ? "active" : ""}`}
          onClick={() => setActiveTab("equipes")}
        >
          Equipes
        </button>
        <button
          className={`tab-button ${activeTab === "pilotos" ? "active" : ""}`}
          onClick={() => setActiveTab("pilotos")}
        >
          Pilotos
        </button>
      </div>

      <div className="estatisticas-box">
        {renderTable()}
      </div>
    </div>
  );
};

export default Estatisticas;
