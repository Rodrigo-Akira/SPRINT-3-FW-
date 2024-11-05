import React from 'react';
import { useParams } from 'react-router-dom';
import corridasData from '../public/data/corridasData.json'; 

const VideoPlayer = () => {
    const { id } = useParams();
    const corrida = corridasData.find(c => c.id === parseInt(id));

    if (!corrida) {
        return <p>Corrida não encontrada.</p>;
    }

    return (
        <div className="video-player-container">
            <h1 style={{ color: "#ffffff" }}>{corrida.nome}</h1> {}
            
            {corrida.videoUrl ? (
                <iframe
                    width="100%"
                    height="500px"
                    src={corrida.videoUrl}
                    title={corrida.nome}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : corrida.videoPath ? (
                <video width="100%" height="500px" controls>
                    <source src={corrida.videoPath} type="video/mp4" />
                    Seu navegador não suporta a reprodução de vídeos.
                </video>
            ) : (
                <p style={{ color: "#ffffff" }}>Vídeo não disponível.</p>
            )}
    
            <p style={{ color: "#ffffff" }}>{corrida.descricao}</p>
        </div>
    );    
};

export default VideoPlayer;
