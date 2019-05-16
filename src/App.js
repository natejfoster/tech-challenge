import React, { Component } from 'react';
import Character from './components/character';
import Search from './components/search';
import './css/app.scss';
import vader from './assets/vader-icon.svg';

const baseURL = 'https://swapi.co/api/people/?search=';

class App extends Component {
  state = {
    characters: [],
    query: '',
    filter: ''
  }

  getResults = () => {
    fetch(baseURL + this.state.query)
      .then(res => res.json())
      .then(data => {
        this.setState({characters: data.results});
      });
  }

  getQuery = (event) => {
    this.setState({query: event.target.value})
  }

  render() { 
    let results;

    if (this.state.characters.length === 0) {
      results = 
        <div className='noResults'>
          <div className='noResults__content'>
            <img src={vader} alt='darth vader' className='noResults__icon'/>
            <h2 className='noResults__desc'>Search by character name</h2> 
          </div>
        </div>
    } else {
      results = this.state.characters.map((character, index) => 
        <Character 
          key={index}
          name={character.name}
          gender={character.gender}
          eye_color={character.eye_color}
          hair_color={character.hair_color}
        />
      )
    }

    return (
      <div className='App'>
        <Search 
          getResults={this.getResults}
          value={this.state.query}
          getQuery={this.getQuery.bind(this)}
        />
        <div className='results'>
          {results}
        </div>
      </div>
    );
  }
}
 
export default App;