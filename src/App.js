import React, { Component } from 'react';
import Character from './components/character';
import Search from './components/search';
import Filter from './components/filter';
import './css/app.scss';
import vader from './assets/vader-icon.svg';

const baseURL = 'https://swapi.co/api/people/?search=';

class App extends Component {
  state = {
    characters: {
      all: [] ,
      male: [] ,
      female: [] ,
      none: []  
    },
    query: '',
    filteredCharacters: []
  }

  getResults = () => {
    fetch(baseURL + this.state.query)
      .then(res => res.json())
      .then(data => {
        let all = data.results;
        let male = all.filter(character => character.gender === 'male')
        let female = all.filter(character => character.gender === 'female')
        let none = all.filter(character => character.gender === 'n/a')
        let characters = {all: all, male: male, female: female, none: none};
        this.setState({characters: characters, filteredCharacters: all});
      });
  }

  getQuery = (event) => {
    this.setState({query: event.target.value});
  }

  filterResults = (filter) => {
    let filterString = filter.split(' ')[0].toLowerCase();
    if (filterString === '') {
      this.setState({filteredCharacters: this.state.characters.all})
    } else {
      this.setState({filteredCharacters: this.state.characters[filterString]})
    }
  }

  render() { 
    const{characters, filteredCharacters} = this.state;
    let results;
    let options = [
      `Male (${characters.male.length})`,
      `Female (${characters.female.length})`,
      `None (${characters.none.length})`
    ];

    if (filteredCharacters.length === 0) {
      results = 
        <div className='noResults'>
          <div className='noResults__content'>
            <img src={vader} alt='darth vader' className='noResults__icon'/>
            <h2 className='noResults__desc'>Search by character name</h2> 
          </div>
        </div>
    } else {
      results = filteredCharacters.map((character, index) => 
        <Character 
          key={index}
          name={character.name}
          gender={character.gender}
          eye_color={character.eye_color}
          hair_color={character.hair_color}
        />
      );
    }

    return (
      <div className='App'>
        <Search 
          getResults={this.getResults}
          value={this.state.query}
          getQuery={this.getQuery.bind(this)}
        />
        <Filter 
          numResults={this.state.filteredCharacters.length}
          options={options}
          filterResults={this.filterResults.bind(this)}
        />
        <div className='results'>
          {results}
        </div>
      </div>
    );
  }
}
 
export default App;