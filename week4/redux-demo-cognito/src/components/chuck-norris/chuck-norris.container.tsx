import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { ChuckNorrisComponent } from './chuck-norris.component';

const mapStateToProps = (state: IState) => (state.chuckNorris);

export const mapDispatchToProps = {
  
};

export const ChuckNorrisContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChuckNorrisComponent);
