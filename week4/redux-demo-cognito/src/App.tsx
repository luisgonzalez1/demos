import * as React from 'react';

import { FirstComponent } from './components/first.component';
import { NavComponent } from './components/nav.component';
import './include/bootstrap';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { SecondComponent } from './components/second.component';
import { TicTacToeContainer } from './components/tic-tac-toe/tic-tac-toe.container';
import { Provider } from 'react-redux';
import { store } from './Store';
import { ClickerContainer } from './components/clicker/clicker.container';
import { SignInContainer } from './components/sign-in/sign-in.container';
import { MovieTableContainer } from './components/movies-table/movies.container';
import { ChuckNorrisContainer } from './components/chuck-norris/chuck-norris.container';
import { NestedComponent } from './components/nested/nested.component';
import { PokemonContainer } from './components/pokemon/pokemon.container';

class App extends React.Component<any, any> {

  public render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <NavComponent />
            <Switch>
              <Route path="/first" component={FirstComponent} />
              <Route path="/second" component={SecondComponent} />
              <Route path="/clicker" component={ClickerContainer} />
              <Route path="/tic-tac-toe" component={TicTacToeContainer} />
              <Route path="/sign-in" component={SignInContainer} />
              <Route path="/movies" component={MovieTableContainer} />
              <Route path="/chuck-norris" component={ChuckNorrisContainer} />
              <Route path="/nested" component={NestedComponent} />
              <Route path="/pokemon" component={PokemonContainer} />
              <Route component={FirstComponent} />
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
