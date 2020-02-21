import React, { useState } from 'react';
import './App.css';
import Mapa from './components/mapa';



import imageMapa from './assets/imgs/tabuleiros-curvas_analist_devops.jpg'

function App(props) {
  const [quantCasas, setQuantCasas] = useState(0);
  const [posicao, setPosicao] = useState(0);
  const [posicoes, setPosicoes] = useState([{
    top: '175px',
    left: '435px'
  }, {
    top: '130px',
    left: '570px'
  }, {
    top: '100px',
    left: '716px'
  }, {
    top: '100px',
    left: '860px'
  }]);

  const andar = () => {
    if (parseInt(posicao) + parseInt(quantCasas) >= posicoes.length) {
      alert('Parabéns, você concluiu o jogo');
      setPosicao(posicoes.length - 1);
      return;
    }

    setPosicao(parseInt(posicao) + parseInt(quantCasas));
  }

  const voltar = () => {
    if (parseInt(posicao) - parseInt(quantCasas) < 0) {
      alert('Você voltou a estaca zero');
      setPosicao(0);
      return;
    }

    setPosicao(parseInt(posicao) - parseInt(quantCasas));
  }

  return (
    <div>
      <input type="number" value={quantCasas} onChange={(e) => setQuantCasas(e.target.value)} />
      <button onClick={() => andar()}>Andar</button>
      <button onClick={() => voltar()}>Voltar</button>
      <Mapa width='100%' height='100vh' url={imageMapa} top={posicoes[posicao].top} left={posicoes[posicao].left} />
    </div>
  );
}

export default App;
