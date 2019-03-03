import * as React from 'react';
import { IChuckNorrisState } from '../../reducers';


// interface IProps extends IChuckNorrisState{
  
// }

export class ChuckNorrisComponent extends React.Component<IChuckNorrisState, {}> {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  public render() {
    return (
      <div className="centered-content-container">
        <h1> {this.props.joke} </h1>
      </div>
    );
  }
}