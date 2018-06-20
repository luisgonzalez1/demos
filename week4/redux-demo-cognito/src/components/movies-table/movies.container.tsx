import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { MovieTableComponent } from './movies.component';
import { updateMovies, updateYear } from '../../actions/movie-table/movie-table.actions';

const mapStateToProps = (state: IState) => (state.movieTable);

export const mapDispatchToProps = {
  updateMovies,
  updateYear
};

export const MovieTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieTableComponent);
