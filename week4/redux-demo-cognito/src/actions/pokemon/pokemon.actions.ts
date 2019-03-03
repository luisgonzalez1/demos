import { pokemonTypes } from "./pokemon.types";


export const updateId = (id: number) => {
  return {
    payload: {
      id
    },
    type: pokemonTypes.UPDATE_ID,
  }
}

export const updatePokemon = (id: number) => (dispatch: any) => {
  fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    .then(resp => {
      console.log(resp.status)
      if (resp.status >= 400 && resp.status < 600) {
        throw new Error("Bad response from server");
      }
      return resp.json();
    })
    .then((pokemon) => {
      dispatch({
        payload: {
          pokemon
        },
        type: pokemonTypes.UPDATE_POKEMON
      })
    })
    .catch(err => {
      console.log(err);
    });

}