import React from 'react';
import { Link } from 'react-router-dom';
import './Corridas.css';

const PaginaCorridas = ({ corridas, onProximaPagina }) => {
    return (
        <div className="pagina-corridas">
            {corridas.length > 0 ? ( 
                corridas.map((corrida, index) => (
                    <div key={index} className="corrida-box">
                        <Link to={`/corrida/${corrida.id}`} className="link-corrida">
                            <div className="miniatura">
                                <img src={corrida.imagem} alt={`Miniatura ${corrida.nome}`} />
                            </div>
                            <div className="informacoes-corrida">
                                <h2>{corrida.nome}</h2>
                                <p>{corrida.descricao}</p>
                                <p>Data: {corrida.data}</p>
                                <p>Informações da corrida</p>
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                <p>Carregando corridas...</p> 
            )}
            <div className="navegacao-pagina">
                <button onClick={onProximaPagina}>Próxima Página</button>
                <div className="paginacao-info">
                    Página <span>1</span> de 1
                </div>
            </div>
        </div>
    );
};

export default PaginaCorridas;
