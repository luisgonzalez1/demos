import { chuckNorrisTypes } from "./chuck-norris.types";
import { clickerTypes } from "../clicker/clicker.types";


export const buyNewJoke = () => (dispatch: any) => {
  dispatch({
    payload: {
      amount: -20
    },
    type: clickerTypes.INCREMENT
  })

  fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
    .then(resp => resp.json())
    .then(data => {
      dispatch({
        payload: {
          joke: data.value.joke
        },
        type: chuckNorrisTypes.BUY_NEW_JOKE,
      })
    })
    .catch(err => {
      console.log(err);
    })

  
}
