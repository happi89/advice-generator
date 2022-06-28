import './index.css';
import { useEffect, useState } from 'react';
import dice from '../images/icon-dice.svg';
import divider from '../images/pattern-divider-desktop.svg';

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
    
      <img src={divider} className='divider-mobile'  alt="" />
      
      <button className="dice-Btn" onClick={fetchSlip}>
        <img src={dice} className='dice'  alt="" />
      </button>
    </div>
  );
}

export default Card;