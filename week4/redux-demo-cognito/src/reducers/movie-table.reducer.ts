import { IMovieTable } from ".";
import { movieTableTypes } from "../actions/movie-table/movie-table.types";



const initialState: IMovieTable = {
  movies: [
  ],
  year: new Date().getFullYear()
}

export const movieTableReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case movieTableTypes.UPDATE_YEAR:
      return {
        ...state,
        year: action.payload.year
      };
    case movieTableTypes.UPDATE_MOVIES:
      return {
        ...state,
        movies: action.payload.movies,
      }
  }

  return state;
};
