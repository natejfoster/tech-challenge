import React from 'react';
import '../css/search.scss';

const Search = ({getResults, getQuery, value}) => {
  return (
    <div className='search'>
      <input 
        className='search__input'
        type='text'
        placeholder='Search by character name'
        onChange={getQuery}
      />
      <button className='search__btn' onClick={getResults} value={value}>Search</button>
    </div>
  );
}
 
export default Search;