type ItemPokemonResponse = {
  name: string;
  url: string;
};

export type ResponsePokemon = {
  results: Array<ItemPokemonResponse>;
};

export type PokemonCard = {
  id: number;
  name: string;
  avatar: string;
  type: string;
};