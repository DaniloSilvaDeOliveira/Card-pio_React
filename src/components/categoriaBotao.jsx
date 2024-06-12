import React from 'react';

function CategoriaBotao({ categoria, setCategoria }) {
    return (
      <button className='botao' onClick={() => setCategoria(categoria)}>
        {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
      </button>
    );
  }

export default CategoriaBotao;