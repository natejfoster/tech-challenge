import React, { Component } from 'react';
import Character from './components/character';
import './css/app.scss';

const baseURL = 'https://swapi.co/api/people/';
const test = {
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.co/api/planets/1/",
  "films": [
    "https://swapi.co/api/films/2/",
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/1/",
    "https://swapi.co/api/films/7/"
  ],
  "species": [
    "https://swapi.co/api/species/1/"
  ],
  "vehicles": [
    "https://swapi.co/api/vehicles/14/",
    "https://swapi.co/api/vehicles/30/"
  ],
  "starships": [
    "https://swapi.co/api/starships/12/",
    "https://swapi.co/api/starships/22/"
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.co/api/people/1/"
}

class App extends Component {
  state = {
    data: {},
    query: '',
    filter: ''
  }

  componentDidMount() {
    fetch(baseURL).then(res => res.json()).then(data => console.log(data));
  }

  render() { 
    return (
      <div className='App'>
        <div className='results'>
          <Character 
            key={1}
            name={test.name}
            gender={test.gender}
            eye_color={test.eye_color}
            hair_color={test.hair_color}
          />
        </div>
      </div>
    );
  }
}
 
export default App;