import React, { useState } from 'react';
import SearchBar from './components/Search';
import PokemonList from './components/PokemonList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <PokemonList searchTerm={searchTerm} />
    </>
  );
}

export default App;
