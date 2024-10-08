import React, { useState } from 'react';
import './Live.css'; 


const ViewerIcon = () => (
  <svg
    fill="#ffffff"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="viewer-icon"
    style={{ width: '20px', height: '20px', marginRight: '8px' }} 
  >
    <path d="M21,14.571C21,16.465,18.538,18,15.5,18S10,16.465,10,14.571s2.462-3.428,5.5-3.428S21,12.678,21,14.571Zm-5.5,5.286c-3.038,0-5.5-1.535-5.5-3.428v2.142C10,20.465,12.462,22,15.5,22S21,20.465,21,18.571V16.429C21,18.322,18.538,19.857,15.5,19.857Zm-7-11c3.038,0,5.5-1.535,5.5-3.428S11.538,2,8.5,2,3,3.535,3,5.429,5.462,8.857,8.5,8.857Zm-.125,4a5.58,5.58,0,0,1,2.181-2.389,8.44,8.44,0,0,1-2.056.25C5.462,10.714,3,9.179,3,7.286V9.428C3,11.3,5.4,12.811,8.375,12.853ZM8.5,22a8.83,8.83,0,0,0,1.079-.067,4.917,4.917,0,0,1-1.37-2.085C5.307,19.753,3,18.261,3,16.429v2.142C3,20.465,5.462,22,8.5,22ZM8,17.556V15.4c-2.8-.16-5-1.613-5-3.4v2.143C3,15.931,5.2,17.4,8,17.556Z"></path>
  </svg>
);

const Live = () => {
  const [mensagens, setMensagens] = useState([]);
  const [novaMensagem, setNovaMensagem] = useState('');

 
  const enviarMensagem = () => {
    if (novaMensagem.trim()) {
      setMensagens([...mensagens, novaMensagem]);
      setNovaMensagem('');
    }
  };

  return (
    <main className="main-content">
      <section className="intro-section">
        <h1>Grand Prix de Tokyo</h1>
      </section>

      <div className="content-layout">
        {}
        <div className="video-placeholder">
          <video controls width="100%" height="100%">
            <source src="video.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>

        {}
        <div className="chat-section">
          {}
          <div className="chat-placeholder">
            {mensagens.map((msg, index) => (
              <p key={index} className="chat-message">{msg}</p>
            ))}
          </div>

          {}
          <div className="chat-footer">
            <input 
              type="text" 
              placeholder="Envie uma mensagem" 
              className="message-input"
              value={novaMensagem}
              onChange={(e) => setNovaMensagem(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && enviarMensagem()} 
            />
            <div className="viewer-count">
              <ViewerIcon /> 10 mil
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Live;
