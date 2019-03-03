import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { PokemonComponent } from './pokemon.component';
import { updateId, updatePokemon } from '../../actions/pokemon/pokemon.actions';

const mapStateToProps = (state: IState) => (state.pokemon);

export const mapDispatchToProps = {
  updateId,
  updatePokemon
};

export const PokemonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonComponent);
