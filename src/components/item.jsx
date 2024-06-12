import React from 'react';
import cardapio from '../cardapio.json';
function Item({ tipo }) {
    const items = cardapio.cardapio.filter(item => item.categoria === tipo);

    return (
        <div className='Items'>
            {items.map((item) => (
                <div className='Item' key={item.id}>
                    <h2>{item.nome}</h2>
                    <p>{item.descricao}</p>
                    <p>R$: {item.preco}</p>
                </div>
            ))}
        </div>
    );
}

export default Item;