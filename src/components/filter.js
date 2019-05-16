import React from 'react';
import Dropdown from './dropdown';
import '../css/filter.scss'

const Filter = ({numResults, filterResults, options}) => {
  return (
    <div className='filter'>
      <h5 className='filter__results'>{numResults} RESULTS</h5>
      <div className="filter__selector">
        <h5 className='filter__gender'>GENDER</h5>
        <div className='filter__dropdown'>
          <Dropdown title='Filter by gender' options={options} filterResults={filterResults} />
        </div>
      </div>
    </div>
  );
}
 
export default Filter;