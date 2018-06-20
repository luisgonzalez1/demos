import { connect } from 'react-redux';
import { IState } from '../../reducers';
import { endGame, makeMove, resetGame } from '../../actions/tic-tac-toe/tic-tac-toe.actions';
import { TicTacToeComponent } from './tic-tac-toe.component';

const mapStateToProps = (state: IState) => (state.ticTacToe);

export const mapDispatchToProps = {
  endGame,
  makeMove,
  resetGame
};

export const TicTacToeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicTacToeComponent);
