import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

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

  useEffect(() => {
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
  },[]);


  
  return (
    <article className={styles.Pokedex}>
      <label>Zoek een </label><label>Pokémon:</label>
      <input type="text" value={filter} onChange={(e) => {
        setFilter(e.target.value)
      }}/>
      {pokemon
      .filter(pokemon => pokemon.name?.toLowerCase().includes(filter.toLowerCase()))
      .map((poke, key) => <NavLink to={`../Pokemon/${poke.id}`} style={{margin:0}}>{poke.name}</NavLink>)}
    </article>
  )

}

export {Pokedex, Pokemon };
