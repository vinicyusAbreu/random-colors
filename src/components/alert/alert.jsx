import './alert.css';
const Alert = ({ alerta }) => {
    return alerta ? <div className='alert'>Cor <strong>{alerta}</strong> copiada para sua área de transferência</div> : null;
}

export default Alert;