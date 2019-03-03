import { IChuckNorrisState } from '.';
import { chuckNorrisTypes } from '../actions/chuck-norris/chuck-norris.types';

const initialState: IChuckNorrisState = {
  joke: `You can't reduce chuck norris`
}

export const chuckNorrisReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case chuckNorrisTypes.BUY_NEW_JOKE:
      return {
        ...state, 
        joke: action.payload.joke
      };
  }

  return state;
};
