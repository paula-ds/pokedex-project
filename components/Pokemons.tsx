import { useEffect, useState } from "react";
import { getCustomUrl, getPokemons } from "../services/pokemonService";
import { POKEMONS_PER_PAGE } from "../constants/api";
import PokemonThumb from "./PokemonsThumb";
import { Pokemon } from "../models/pokemon";
import { getPokemonListInfo } from "../utils/utils";

export default function Pokemons() {
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const firstfetch = async () => {
    const pokemonInfo = await getPokemons(POKEMONS_PER_PAGE);
    const { data } = pokemonInfo;
    setNextPageUrl(data.next);
    const pokemons = await getPokemonListInfo(data.results);
    setPokemons([...pokemons]);
  };

  const handleFetchNextPokemons = async () => {
    setLoading(true);
    const { data } = await getCustomUrl(nextPageUrl);
    setNextPageUrl(data.next);
    const pokemons = await getPokemonListInfo(data.results);
    setPokemons((prev) => [...prev, ...pokemons]);
    setLoading(false);
  };

  useEffect(() => {
    firstfetch();
  }, []);

  return (
    <div className="container">
      <div className="pokemons-container">
        <h1>Pokédex</h1>
        <div className="white-container">
          <ul className="pokemons-container-list">
            {pokemons.map((pokemonStats) => (
              <PokemonThumb
                key={pokemonStats.id}
                id={pokemonStats.id}
                sprite={pokemonStats.sprite}
                name={pokemonStats.name}
                types={pokemonStats.types}
              />
            ))}
          </ul>
          {nextPageUrl && (
            <button
              className="button-lightblue"
              onClick={handleFetchNextPokemons}
              disabled={loading}
            >
              Cargar más Pokémon
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
