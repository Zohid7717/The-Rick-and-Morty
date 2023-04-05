import React from 'react';
import './CardItem.scss'
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import { AiFillLike } from 'react-icons/ai'

const CardItem = ({ item, id, page }) => {
  const likeArr = []
  const like = () => {
    
    // localStorage.setItem('item', `${id}`)
    console.log(id)
  }
  return (
    <div className='cardItem'>
      <img src={item.image} alt="" />
      <p className="cardItem__status">{item.status}</p>
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
        <div className="cardItem__btn-wrap">
          <Link to={`${id}`} className="cardItem__more">More</Link>
          <BiLike onClick={like} className='cardItem__like'/><AiFillLike/>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
