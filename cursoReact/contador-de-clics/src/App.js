import './App.css';
import logo from './images/logo.png'
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const[numClicks,setNumClicks] = useState(0);

  const manejarClick=()=>{
    setNumClicks(numClicks+1)
  }

  const resetCount=()=>{
    setNumClicks(0)
  }

  return (
    <div className="App">      
      <div className='container-logo'>
        <img 
            className='logo'
            alt='logo'
            src={logo}          
            />
      </div>
      <Counter
        numClicks={numClicks}/> 
      <div className='container-buttons'>
        <Button              
          text='Click'
          isButtonClick={true}
          manejarClick={manejarClick}
        />
        <Button              
          text='Reset'
          isButtonClick={false}
          manejarClick={resetCount}
        />

      </div>
    </div>
  );
}

export default App;
