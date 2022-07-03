import { useState } from 'react';
import './paletaCores.css'
const PaletaCores = ({ cores, setCorSelecionada }) => {

    const [timer, setTimer] = useState(null);

    const pegarCor = (cor) => {
        setCorSelecionada(cor);
        if (timer) {
            clearTimeout(timer);

        }
        setTimer(setTimeout(() => {
            setCorSelecionada('');
        }, 2000));

        navigator.clipboard.writeText(cor);
    }

    cores = cores || [];
    return (
        <div className="paleta-cores">
            {
                cores.map((cor, index) => (
                    <div className='card-paleta' key={index}
                        onClick={() => pegarCor(cor)}
                        style={{ boxShadow: `0 10px 20px ${cor + 30}, 0 6px 6px ${cor + '3b'}` }}>
                        <div className='card-cor' style={{ backgroundColor: cor }}></div>
                        <span className='card-cor--info'>{cor}</span>
                    </div>
                ))
            }
        </div>
    )
}
export default PaletaCores;