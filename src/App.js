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

  // API queried once the search button has been clicked.
  // Creates filtered sets as part of this step to provide fast filtering.
  getResults = () => {
    if (this.state.query === '') {
      window.alert('Please enter a value to search for');
    } else {
      fetch(baseURL + this.state.query)
        .then(res => res.json())
        .then(data => {
          let all = data.results;
          let male = all.filter(character => character.gender === 'male')
          let female = all.filter(character => character.gender === 'female')
          let none = all.filter(character => character.gender === 'n/a')
          let characters = {all: all, male: male, female: female, none: none};
          this.setState({characters: characters, filteredCharacters: all});
        }
      );
    }
  }

  // store the query string in component state
  getQuery = (event) => {
    this.setState({query: event.target.value});
  }

  // If a filter has been selected, this switches which character set is being rendered.
  // If filters are cleared, the character set is reset to the list of all characters
  filterResults = (filter) => {
    // modifying the string to avoid the need of a switch statement
    let filterString = filter.split(' ')[0].toLowerCase();
    if (filterString === '') {
      this.setState({filteredCharacters: this.state.characters.all})
    } else {
      this.setState({filteredCharacters: this.state.characters[filterString]})
    }
  }

  render() { 
    // destructuring for easier access
    const{characters, filteredCharacters} = this.state;
    
    // will be used to store conditional content for rendering
    let results;
    
    // options to be passed into the dropdown selector
    let options = [
      `Male (${characters.male.length})`,
      `Female (${characters.female.length})`,
      `None (${characters.none.length})`
    ];

    // content to render for no results state
    if (filteredCharacters.length === 0) {
      results = 
        <div className='noResults'>
          <div className='noResults__content'>
            <img src={vader} alt='darth vader' className='noResults__icon'/>
            <h2 className='noResults__desc'>Search by character name</h2> 
          </div>
        </div>
    } else {
      // content to render for results present state
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
          onClick={this.getResults}
          value={this.state.query}
          onChange={this.getQuery.bind(this)}
          placeholder='Search by character name'
        />
        <Filter 
          key={this.state.query /*trick to re-render the filter if the query is changed*/}
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