import { useState } from 'react';
import { evaluate } from 'mathjs';
import Button from './components/Button'
import { LuDelete } from "react-icons/lu";
import './App.css'
import Display from './components/Display';

function App() {
  const [rlt, setRlt] = useState('');
  const [crt, setCrt] = useState('');

  function asigOp(value) {
    if (rlt) {
      setCrt(rlt + value);
    } else {
      setCrt(crt + value);
    }
  }

  function asigVal(value) {
    setCrt(crt + value);
  }

  function asigResult() {
    if (crt) {
      setRlt(evaluate(crt));
      setCrt('');
    } else {
      alert('No se ha ingresado ningin digito');
    }
  }
  function remLstCh() {
    setCrt(crt.substring(0, crt.length - 1));
  }

  return (
    <div className='calculadora'>
      <h1>D-ADE</h1>
      < Display
        result={rlt}
        current={crt}
      />
      <div className='teclado'>
        <Button
          value={'C'}
          handleClick={
            () => {
              setCrt('')
              setRlt('')
            }
          }
        />
        <Button value={<LuDelete />} handleClick={remLstCh} />
        <Button value={'÷'} handleClick={asigOp} />

        <Button value={7} handleClick={asigVal} />
        <Button value={8} handleClick={asigVal} />
        <Button value={9} handleClick={asigVal} />
        <Button value={'*'} handleClick={asigOp} />

        <Button value={4} handleClick={asigVal} />
        <Button value={5} handleClick={asigVal} />
        <Button value={6} handleClick={asigVal} />
        <Button value={'-'} handleClick={asigOp} />

        <Button value={1} handleClick={asigVal} />
        <Button value={2} handleClick={asigVal} />
        <Button value={3} handleClick={asigVal} />
        <Button value={'+'} handleClick={asigOp} />

        <Button value={0} handleClick={asigVal} />
        <Button value={'.'} handleClick={asigVal} />
        <Button value={'='} handleClick={asigResult} />
      </div>
      <p><small>Created with react by D-ADE</small></p>
    </div>
  )
}

export default App
