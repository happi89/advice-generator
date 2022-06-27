import './index.css';
import { useEffect, useState } from 'react';

const Card = () => {
  const [slip, setSlip] = useState('');  

  const fetchSlip = async() => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setSlip(data.slip);
  }

  useEffect(() => {
    fetchSlip();
  }, [])

  return (  
    <div className='container'>
      <p className='number'>Advice #{slip.id}</p>
      <p className='quote'>{`"${slip.advice}"`}</p>
    
      <img className='divider-mobile' src="../images/pattern-divider-desktop.svg" alt="" />
      
      <button className="dice-Btn" onClick={fetchSlip}>
        <img className='dice' src="../images/icon-dice.svg" alt="" />
      </button>
    </div>
  );
}

export default Card;