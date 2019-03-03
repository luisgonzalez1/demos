import { movieTableTypes } from "./movie-table.types";
import { environment } from "../../environment";
import { demoApiAxios } from "../../interceptors/demo-api-axios";


export const updateYear = (year: number) => {
  return {
    payload: {
      year
    },
    type: movieTableTypes.UPDATE_YEAR,
  }
}

export const updateMovies = (year: number) => (dispatch: any) => {
  demoApiAxios.get(environment.context + 'movies/year/' + year)
    .then( resp => {
      dispatch({
        payload: {
          movies: resp.data
        },
        type: movieTableTypes.UPDATE_MOVIES
      })
    })
    .catch(err => {
      console.log(err);
    });
}