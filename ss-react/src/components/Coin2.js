import React from 'react';
import './Coin2.css';

const Coin = ({
  name,
  price,
  symbol,
  image
}) => {
  return (
    <div className='c2-coin-container'>
      <div className='c2-coin-row'>
        <div className='c2-coin'>
          <img src={image} alt='c2-crypto' />
          <h1>{name}</h1>
          <p className='c2-coin-symbol'>{symbol}</p>
        </div>
        <div className='2-coin-data'>
          <p className='c2-coin-price'><u>Price</u><br></br>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;