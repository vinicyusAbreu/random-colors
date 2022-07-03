import { useState, useEffect } from 'react';
import './App.css';
import PaletaCores from './components/paletaCores/paletaCores';
import Alert from './components/alert/alert';
import RandomHexColorCode from './service/color';


function App() {

  const [cores, setCores] = useState([]);
  const [corSelecionada, setCorSelecionada] = useState('');

  useEffect(() => {
    setCores(RandomHexColorCode());

  }, []);


  const gerarCores = () => {
    setCores(RandomHexColorCode());

  }

  return (
    <div className='App'>

      {
        corSelecionada && (
          <Alert alerta={corSelecionada} />
        )
      }

      <h1>Gerador de paleta de cores</h1>

      <PaletaCores cores={cores} setCorSelecionada={setCorSelecionada} delay={2000} />

      <button className='btn-gerador'
        onClick={gerarCores}>Gerar paleta</button>

      <p>Ou apenas pressione a "Barra de espaço" para gerar novas paletas</p>

      <div className='box-card'>Clique no card para copiar a cor individual</div>

    </div>
  );
}

export default App;
