import React from 'react';
import './CardItem.scss'

const CardItem = ({ item, id }) => {
  return (
    <div className='cardItem'>
      <img src={item.image} alt="" />
      <p className="cardItem__status">{item.status }</p>
      <div className="cardItem__content">
        <h3 className="cardItem__name">
          {item.name}
        </h3>
        <p className="cardItem__last-loc">
          Last location
        </p>
        <p className="cardItem__last-loc-title">
          {item.location.name}
        </p>
        <button className="cardItem__more">More</button>
      </div>
    </div>
  );
}

export default CardItem;
