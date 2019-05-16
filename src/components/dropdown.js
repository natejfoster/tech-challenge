import React, { Component } from 'react';
import '../css/dropdown.scss'
import Chevron from '../assets/chevron--down.svg';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      isOpen: false,
      title: props.title,
      selected: ''
    }
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  select = (selected) => {
    this.setState({isOpen: !this.state.isOpen, selected: selected});
    this.props.filterResults(selected);
  }

  render() { 
    const{isOpen, title, selected, options} = this.state;

    let toggleStyle = isOpen ? {display: 'block'} : {display: 'none'};
    let arrowStyle = isOpen ? {transform: 'rotate(180deg)'} : {};
    let curTitle = selected === '' ? title : selected;

    let list = options.map((option, index) => 
      <h5 className='dropdown__item' key={index} onClick={() => this.select(option)}>
        {option}
      </h5>
    );

    return (
      <div className='dropdown'>
        <div className='dropdown__selector' onClick={this.toggle}>
          <h5 className='dropdown__title'>{curTitle}</h5>
          <img src={Chevron} className='dropdown__arrow' alt='dropdown arrow' style={arrowStyle}/>
        </div>
        <div className='dropdown__list' style={toggleStyle}>
          {list}
          <h5 className='dropdown__item' onClick={() => this.select('')}>
            Clear Filter
          </h5>
        </div>
      </div>
    );
  }
}
 
export default Dropdown;