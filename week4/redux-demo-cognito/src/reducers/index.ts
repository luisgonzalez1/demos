import { combineReducers } from "redux";
import { ticTacToeReducer } from "./tic-tac-toe.reducer";
import { clickerReducer } from "./clicker.reducer";
import { signInReducer } from "./sign-in.reducer";
import { Movie } from "../model/Movie";
import { movieTableReducer } from "./movie-table.reducer";
import { chuckNorrisReducer } from "./chuck-norris.reducer";
import { pokemonReducer } from "./pokemon.reducer";
import { CognitoUser } from "amazon-cognito-identity-js";
import { cognitoUserReducer } from "./cognito-user-reducer";

export interface ICognitoUser { 
  user: CognitoUser | null
}

export interface ISignIn {
  firstSignIn: {
    code: string,
    isFirstSignIn: boolean,
    password: string,
    passwordConfirmation: string
  },
  username: string,
  password: string,
  errorMessage: string
}

export interface ITicTacToeState {
  game: string[][],
  message: string,
  playerTurn: boolean, // true p1, false p2
  winner: number
}

export interface IChuckNorrisState {
  joke: string;
}

export interface IMovieTable {
  movies: Movie[],
  year: number,
}

export interface IPokemonState {
  id: number,
  pokemon: any
}

export interface IState {
  chuckNorris: IChuckNorrisState,
  clicker: {
    clicks: number
  },
  cognitoUser: ICognitoUser,
  ticTacToe: ITicTacToeState,
  signIn: ISignIn,
  movieTable: IMovieTable,
  pokemon: IPokemonState
};

export const state = combineReducers<IState>({
  chuckNorris: chuckNorrisReducer,
  clicker: clickerReducer,
  cognitoUser: cognitoUserReducer,
  movieTable: movieTableReducer,
  pokemon: pokemonReducer,
  signIn: signInReducer,
  ticTacToe: ticTacToeReducer,
});