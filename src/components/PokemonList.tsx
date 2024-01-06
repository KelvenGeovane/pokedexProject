import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
import Search from './Search';


//Estou fazendo a declaração de tipo da pesquisa
interface PokemonListProps {
  searchTerm: string;
}

// crio meu component, passo a props search
const PokemonList: React.FC<PokemonListProps> = ({ searchTerm }) => {

    //Aqui eu crio minha lista pra armazenar oque eu recebo da API
  const [list, setList] = useState<any[]>([]);


    //Faço o get passando a api e limitando em 100 resultados, fiz dessa forma pois nao havia no teste um total resultados
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => setList(response.data.results))
      .catch(error => console.error('Error fetching Pokemon data:', error));
  }, []);


    //Faço um filtro na lista de Pokemon
  const filteredList = list.filter((item: any) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

    //Retorno somente os pokemons que vierem confirmados da lista
  return (
    <>
      {searchTerm !== '' &&
        filteredList.length > 0 &&
        filteredList.map((item: any) => (
          <Pokemon key={item.name} data={item} searchTerm={searchTerm} />
        ))}
    </>
  );
};

export default PokemonList;
