import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function App() {
  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const setData = () => {
    Promise
      .all([
        Axios.get(urlPlanets), 
        Axios.get(urlPeople)
      ])
      .then(resp => {
        setPlanets(resp[0].data);
        setPeople(resp[1].data);
      });
  }
  useEffect(setData,[]);
  console.log(people);
  console.log(planets);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {people.map(char => {
        const planetId = char.homeworld;
        const planetName = planets.find(planet => planet.id === planetId).name;
        return(
          <Character key={char.id} name={char.name} homeworld={{id: planetId, name: planetName}} />
        )
      })}
    </div>
  )
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App


//wrong code sample




//Default Starting Point



//import React from 'react'
//import axios from 'axios'
//import Character from './Character'

//const urlPlanets = 'http://localhost:9009/api/planets'
//const urlPeople = 'http://localhost:9009/api/people'

//function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
//  return (
 //   <div>
 //     <h2>Star Wars Characters</h2>
 //     <p>See the README of the project for instructions on completing this challenge</p>
 //     {/* ❗ Map over the data in state, rendering a Character at each iteration */}
 //   </div>
 // )
//}

//export default App

//// ❗ DO NOT CHANGE THE CODE  BELOW
//if (typeof module !== 'undefined' && module.exports) module.exports = App

