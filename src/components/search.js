// Reusable searchbar component. 

import React from 'react';
import '../css/search.scss';

const Search = ({onClick, onChange, value, placeholder}) => {
  return (
    <div className='search'>
      <input 
        className='search__input'
        type='text'
        placeholder={placeholder}
        onChange={onChange}
      />
      <button className='search__btn' onClick={onClick} value={value}>Search</button>
    </div>
  );
}
 
export default Search;