import './App.css';
import Button from './components/Button';
import logo from './images/logo.png'
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [screen,setScreen] = useState('');
  const addScreen = value=>{
    setScreen(screen + value);
  };
  const calculateResult=()=>{
    if(screen){
      setScreen(evaluate(screen))
    }else{
      alert('Debe ingresar valores numericos para realizar la operación')
    }
    
  };

  return (
    <div className="App">
      <div className='container-logo'>
        <img 
          alt='logo'
          className='logo'
          src={logo}
        />
      </div>
      <div className='container-calculadora'>
        <Screen 
          screen={screen}
        />
        <div className='fila'>
          <Button manejarClick={addScreen}>1</Button>
          <Button manejarClick={addScreen}>2</Button>
          <Button manejarClick={addScreen}>3</Button>
          <Button manejarClick={addScreen}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={addScreen}>4</Button>
          <Button manejarClick={addScreen}>5</Button>
          <Button manejarClick={addScreen}>6</Button>
          <Button manejarClick={addScreen}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={addScreen}>7</Button>
          <Button manejarClick={addScreen}>8</Button>
          <Button manejarClick={addScreen}>9</Button>
          <Button manejarClick={addScreen}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={calculateResult}>=</Button>
          <Button manejarClick={addScreen}>0</Button>
          <Button manejarClick={addScreen}>.</Button>
          <Button manejarClick={addScreen}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear manejarClear={()=>setScreen('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
