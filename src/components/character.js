// Reusable character component

import React from 'react';
import '../css/character.scss';

const Character = ({name, gender, hair_color, eye_color}) => {
  return (
    <div className='character'>
      <h4 className='character__name'>{name}</h4>
      <div className='character__desc'>
        <span>{gender}</span>
        <span>{hair_color}</span>
        <span>{eye_color}</span>
      </div>
    </div>
  );
}
 
export default Character;