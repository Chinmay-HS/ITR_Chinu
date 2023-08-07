
import { useState } from 'react';
import './App.css';
import { Clock } from './components/Clock';
import { Countdown } from './components/Countdown';

function App() {

  const [message, setMessage] = useState(null);

  return (
    <>
      <Clock />
      <Countdown event={e=>setMessage("The world has been destroyed! :(")}/>
      {
        message && (
          <div className='message'>
            {message}
          </div>
        )
      }
    </>
  );
}

export default App;
