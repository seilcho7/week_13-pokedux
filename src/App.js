import React from 'react';
import './App.css';
import PokeList from './containers/PokeListContainer';
import VisibilityButton from './containers/VisibilityButtonContainer';

function App() {
  return (
    <div className="App">
      <h1>PokeThings</h1>
      <VisibilityButton />
      <PokeList />
    </div>
  );
}

export default App;
