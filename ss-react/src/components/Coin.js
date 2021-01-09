import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'><u>Price</u><br></br>${price}</p>
          <p className='coin-volume'><u>Volume</u><br></br>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'><u>Price Change</u><br></br>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'><u>Price Change</u><br></br>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'><u>Mkt Cap</u><br></br>${marketcap.toLocaleString()}</p>
         
        </div>
      </div>
    </div>
  );
};

export default Coin;