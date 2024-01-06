import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScaleIcon from '@mui/icons-material/Scale';
import HeightIcon from '@mui/icons-material/Height';

    //Estou fazendo a declaração de tipo da pesquisa
interface PokemonProps {
  data: any;
  searchTerm: string;
}

    
const Pokemon: React.FC<PokemonProps> = ({ data, searchTerm }) => {
  const [details, setDetails] = useState<any | null>(null);
    //Aqui faço outra chamada, aqui eu só pego as informações de data.url que é oque eu recebo da primeira requisição
    // E coloco em details
  useEffect(() => {
    axios.get(data.url).then((response) => setDetails(response.data))
      .catch(error => console.error('Error fetching Pokemon details:', error));
  }, [data.url]);

  //Aqui faço uma verificação pra que ele so me retorne somente se os dados forem positivos

  if (!details || searchTerm === '' || !details.name.toLowerCase().includes(searchTerm.toLowerCase())) {
    return null;
  }

  return (
    <>
    <div style={{ borderRadius:'15px', boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
            <img src={details.sprites.front_default} style={{width:100, height:100}}></img>
        </div>
        <div style={{textAlign:'center',fontFamily:'fantasy'}}>
            {details.name} - EXP {details.base_experience} <br/>
            <ScaleIcon fontSize='small'></ScaleIcon>
            Peso: {details.weight} <br/>
            <HeightIcon fontSize='small'></HeightIcon>
            Altura: {details.height}
        </div>
    </div>
    </>
   
  );
};

export default Pokemon;
