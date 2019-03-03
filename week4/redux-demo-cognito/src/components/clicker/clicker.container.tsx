import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { increment, buyAuto } from '../../actions/clicker/clicker.actions';
import { buyNewJoke } from '../../actions/chuck-norris/chuck-norris.actions';
import { ClickerComponent } from './clicker.component';

const mapStateToProps = (state: IState) => (state.clicker);

export const mapDispatchToProps = {
  buyAuto,
  buyNewJoke,
  increment,
  
};

export const ClickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClickerComponent);
