// React
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

// Functional
import { Dna } from 'react-loader-spinner';

// CSS
import styles from './pokedex.module.css'

interface IPokemon {
  id?:number,
  name?:string,
  weight?: number,
  height?: number,
  sprite?: string
}

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<IPokemon>({});
  let { id } = useParams();

  if(id == undefined){
    id = "0";
  }

  let no:number = parseInt(id);

  useEffect(() => {
    const getPokemon = async () => {
      let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${no}`);
      let newPokemon = await result.json();
      setPokemon({
        name: newPokemon.name,
        weight: newPokemon.weight,
        height: newPokemon.height,
        sprite: newPokemon.sprites.front_shiny
      })
    }

    getPokemon();
  },[]);
  
  return (
    <article>
      <p>Naam: {pokemon.name}</p>
      <p>Hoogte: {pokemon.height}</p>
      <p>Gewicht: {pokemon.weight}</p>
      <img src={pokemon.sprite} />
      <NavLink to="../pokedex">back</NavLink>
    </article>
  )
}

const Pokedex = () => {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(loading => true);
    let PokeTeam: IPokemon[] = [];
    const getPokemon = async () => {
      for(let i:number = 1; i<150; i++){
        let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let newPokemon = await result.json();
        PokeTeam.push({
          name: newPokemon.name,
          id: newPokemon.id,
          weight: newPokemon.weight,
          height: newPokemon.height,
          sprite: newPokemon.sprites.front_shiny
        });
      }
      setPokemon([ ...PokeTeam])
    }
    getPokemon(); 
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  },[]);


  
  return (
    <div>
      <h4>Zoek een Pokemon</h4>
      {loading ? (
        <main><Dna
        visible={true}
        height="50"
        width="150"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      /></main>
      ):(
      <main>
        <input type="text" value={filter} onChange={(e) => {
          setFilter(e.target.value)
        }}/>
        <article className={styles.Pokedex}>
          {pokemon
          .filter(pokemon => pokemon.name?.toLowerCase().includes(filter.toLowerCase()))
          .map((poke, key) => <NavLink to={`../Pokemon/${poke.id}`} style={{margin:"0 2 5 0"}}>{poke.name}</NavLink>)}
        </article>
      </main>
      )}
    </div>
  )
          }
export {Pokedex, Pokemon };
