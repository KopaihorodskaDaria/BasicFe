import React from 'react';
import { CardData } from '../CardData';
import '../css/GoodsCard.css';

const GoodsCard= ()=> {
    return (
        <div className='card'>
            {CardData.map(figure => <GoodCard info={figure} key={figure.name} />)}
        </div>);
};

const GoodCard = ({ info }) => {
    const { img, name, price } = info;
    return (
        <div className='sneakers'>
            <img className='sneakers_img' alt='sneakers_img' src={img} />
            <p><i>{name}</i></p>
            <p><i>Ціна: {price}</i></p>
        </div>);
};

export default GoodsCard;