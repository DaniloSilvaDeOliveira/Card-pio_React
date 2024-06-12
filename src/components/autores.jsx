import React from 'react';

function Autores({ urlImg, nome, titulo }) {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <img src={urlImg} alt={`Foto de ${nome}`} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <h2>{nome}</h2>
      <p>{titulo}</p>
    </div>
  );
}

export default Autores;