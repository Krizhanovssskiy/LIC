import './cards-list.scss';

import React from 'react';
import Card from '../Card';

const CardsList = () => {
  return (
    <div className='CardsList__photo-container'>
      <ul className='CardsList__photo-list'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  )
}

export default CardsList;