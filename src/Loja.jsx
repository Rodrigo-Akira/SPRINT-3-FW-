import React from 'react';
import './Loja.css'; 

const produtos = [
  {
    id: 1,
    nome: 'Ingresso GP Interlagos',
    imagem: '/public/imagens/bilhete.png',
    preco: '42 mil pontos',
  },
  {
    id: 2,
    nome: 'Boné Mahindra',
    imagem: '/public/imagens/Boné.png',
    preco: '3 mil pontos',
  },
  {
    id: 3,
    nome: 'Chaveiro Mahindra',
    imagem: '/public/imagens/Chaveiro.png',
    preco: '700 pontos',
  },
  {
    id: 4,
    nome: 'Conhecer Pit Mahindra',
    imagem: '/public/imagens/bilhete.png',
    preco: '54 mil pontos',
  },
  {
    id: 5,
    nome: 'Garrafa Mahindra',
    imagem: '/public/imagens/Garrafa.png',
    preco: '2.500 pontos',
  },
  {
    id: 6,
    nome: 'Camiseta Mahindra',
    imagem: '/public/imagens/Camiseta.png',
    preco: '4.200 pontos',
  }, 
  {
    id: 7,
    nome: 'Miniatura Mahindra',
    imagem: '/public/imagens/Miniatura.png',
    preco: '3.500 pontos',
  },
  {
    id: 8,
    nome: 'Corta Vento Mahindra',
    imagem: '/public/imagens/Corta Vento.png',
    preco: '7.000 pontos',
  }
];

const Loja = () => {
  const handleComprar = () => {
    alert('Compra efetuada com sucesso!');
  };

  return (
    <div className="lojas-container">
      <h2>Nossos Produtos</h2>
      <div className="produtos-grid">
        {produtos.map(produto => (
          <div className="produto" key={produto.id}>
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>{produto.preco}</p>
            <button className="comprar-button" onClick={handleComprar}>
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loja;
