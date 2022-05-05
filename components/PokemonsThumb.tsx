import Image from 'next/image'
import { SPANISH_POKEMON_TYPES } from "../constants/api";
import { Pokemon } from "../models/pokemon"
import { capitalize } from "../utils/utils"

const PokemonThumb = (pokemon: Pokemon) => {
    const pokemonId = String(pokemon.id).padStart(3, '0');
    return (
        <li>
            <figure>
                <Image src={pokemon.sprite} alt={pokemon.name} width="230" height="230"/>
            </figure>

            <div className="pokemon-info">
                <p>
                    <span className="pokemon-id">N.º{pokemonId}</span>
                </p>
                <h5 className="pokemon-name">{capitalize(pokemon.name)}</h5>
                
                {pokemon.types.map((type) => (
                    <div key={type} className="abilities">
                       <span className={`background-color-${type}`}>{SPANISH_POKEMON_TYPES[type]}</span>
                   </div>
                   )
                )}
            </div>
        </li>
    )
}

export default PokemonThumb


