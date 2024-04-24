import '../style/Button.css'
export default function ({ handleClick, value }) {
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.');
  };
  const bigBtn = (valor) => {
    return (valor === 'C' || valor === 0);
  };

  return (
    <button className={`boton ${esOperador(value) ? 'operador' : ''} ${bigBtn(value) ? 'big-btn' : ''}`} onClick={() => { handleClick(value) }}>
      {value}
    </button>
  )
}