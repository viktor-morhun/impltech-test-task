import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import PersonCard from './PersonCard';

function App() {
  const [people, setPeople] = React.useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(people => {
        setPeople(people.results);
      })
  }, []);

  return (
    <div className="App">
      {people.map(person => (
        <PersonCard person={person} key={person.name}/>
      ))}
    </div>
  );
}

export default App;
