import * as React from 'react';
import { IPokemonState } from '../../reducers';


interface IProps extends IPokemonState {
  updateId: (id: number) => void,
  updatePokemon: (id: number) => any
}

export class PokemonComponent extends React.Component<IProps, {}> {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  public updateId = (event: any) => {
    console.log(event.target.value)
    this.props.updateId(event.target.value);
  }

  public submit = (event: any) => {
    event.preventDefault();
    this.props.updatePokemon(this.props.id);
  }

  public render() {
    const sprites = this.props.pokemon && this.props.pokemon.sprites;
    return (
      <div className="centered-content-container">
        <form onSubmit={this.submit}>
          ID: <input type="number"
            value={this.props.id}
            onChange={this.updateId} />
          <button className="btn btn-primary" type="submit">Find!</button>
        </form>
        {this.props.pokemon &&
          <div className="container">
            {this.props.pokemon.name}
            <div className="row">
              {
                Object.keys(sprites).map((key: any) =>
                  sprites[key] !== null &&
                  <div key={sprites[key]} className="col">
                    <img src={sprites[key]} />
                  </div>
                )
              }
            </div>
          </div>
        }
      </div>
    );
  }
}