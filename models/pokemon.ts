export type Type =
  | "grass"
  | "poison"
  | "fire"
  | "flying"
  | "water"
  | "bug"
  | "normal"
  | "electric"
  | "ground"
  | "fairy"
  | "fighting"
  | "psychic"
  | "rock"
  | "steel"
  | "ghost"
  | "ice"
  | "dragon"
  | "dark";

export interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  types: Type[];
}

export interface PokemonInfoResponse {
  id: number;
  name: string;
  sprites: { other: { "official-artwork": { front_default: string } } };
  types: { type: { name: string; url: string } }[];
}
