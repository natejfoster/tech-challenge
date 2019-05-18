// Custom reusable dropdown component. 

import React, { Component } from 'react';
import '../css/dropdown.scss'
import Chevron from '../assets/chevron--down.svg';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selected: ''
    }
  }

  // Switch state of isOpen. Used to set visibility of dropdown list.
  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  // When a selection is made, dropdown is closed.
  // Selection is sent to the select method passed in from parent component.
  makeSelection = (selected) => {
    this.setState({isOpen: !this.state.isOpen, selected: selected});
    this.props.select(selected);
  }

  render() { 
    // destructuring for ease of access
    const{isOpen, selected} = this.state;

    // Conditional styles and title based on component state.
    let toggleStyle = isOpen ? {display: 'block'} : {display: 'none'};
    let arrowStyle = isOpen ? {transform: 'rotate(180deg)'} : {};
    let curTitle = selected === '' ? this.props.title : selected;

    // Create the list of options to be rendered.
    let list = this.props.options.map((option, index) => 
      <h5 className='dropdown__item' key={index} onClick={() => this.makeSelection(option)}>
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
          {/* Added option to clear filter */}
          <h5 className='dropdown__item' onClick={() => this.makeSelection('')}>
            Clear Filter
          </h5>
        </div>
      </div>
    );
  }
}
 
export default Dropdown;