import { IPokemonState } from ".";
import { pokemonTypes } from "../actions/pokemon/pokemon.types";


const initialState: IPokemonState = {
  id: 0,
  pokemon: null
}

export const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case pokemonTypes.UPDATE_ID:
      return {
        ...state,
        id: action.payload.id
      };
    case pokemonTypes.UPDATE_POKEMON:
      return {
        ...state,
        pokemon: action.payload.pokemon,
      }
  }

  return state;
};
