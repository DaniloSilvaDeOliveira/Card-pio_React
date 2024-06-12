import React, { useState, useEffect } from 'react';
import Item from './components/item.jsx';
import CategoriaBotao from './components/categoriaBotao.jsx';
import Autores from './components/autores.jsx'
import About from './components/about.jsx'

function App() {
  const [categoria, setCategoria] = useState('comida');
  const categorias = useState(['comida', 'bebida', 'sobremesa'])[0];
  const [data, setData] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setData(new Date());
  };

  return (
    <div>
      <div>
        <h2>{data.toLocaleTimeString()}</h2>
      </div>
      <div className='botoes'>
        {categorias.map((cat) => (
          <CategoriaBotao key={cat} categoria={cat} setCategoria={setCategoria} />  
        ))}
      </div>
      <div className='items'>
        <Item tipo={categoria} />
      </div>
      <Autores
        urlImg={"https://media.licdn.com/dms/image/D4D03AQGpLl6X3ogldw/profile-displayphoto-shrink_200_200/0/1717521804078?e=1723680000&v=beta&t=FAOxxL2Kc-I4Sb99ZnXUpSH6HiNgYkdB8V2wd8LTy8A"}
        nome={"Danilo Silva de Oliveira"}
        titulo={"Programador"}
      />
      <Autores
      urlImg={"https://media.licdn.com/dms/image/D4D03AQFTGx28_EypTA/profile-displayphoto-shrink_400_400/0/1686169459453?e=1723680000&v=beta&t=Knjw70i_ZqNngSxpHF5cc3pndSMmV3UC5ehMx2qRQro"}
      nome={"Juliana Lopes de Carvalho"}
      titulo={"Programadora"}
      />
      <Autores
      urlImg={"https://media.licdn.com/dms/image/C5603AQG93dSGHV91JA/profile-displayphoto-shrink_400_400/0/1640272270552?e=1723680000&v=beta&t=PYgN_RRbPorWG_oZB-9fkZCyasziSNUsp5NvHG74x_E"}
      nome={"Luma Sousa"}
      titulo={"Programadora"}
      />
      <About />
    </div>
    
  );
}

export default App;