import { getCustomUrl } from "../services/pokemonService";
import { Pokemon, PokemonInfoResponse, Type } from "../models/pokemon";

const parsePokemonInfo = (pokemon: PokemonInfoResponse): Pokemon => ({
  id: pokemon.id,
  name: pokemon.name,
  sprite: pokemon.sprites.other["official-artwork"].front_default,
  types: pokemon.types.map((x) => x.type.name as Type),
});

export async function getPokemonListInfo(pokemons: { name: string; url: string }[]) {
  const results = await Promise.all(pokemons.map((pokemon) => getCustomUrl(pokemon.url)));
  return results.map((result) => parsePokemonInfo(result.data));
}

export const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};
