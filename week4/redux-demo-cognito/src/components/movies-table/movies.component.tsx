
import * as React from 'react';
import { IMovieTable } from '../../reducers';

interface IProp extends IMovieTable {
  updateYear: (year: number) => void
  updateMovies: (year: number) => void
}

export class MovieTableComponent extends React.Component<IProp, any> {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  public submit = (e: any) => {
    e.preventDefault();
    this.props.updateMovies(this.props.year);
  }

  public render() {
    return (
      <div className="container">
        <form className="row" onSubmit={this.submit}>
          <div className="col-sm">
            <a href="../add-movie/index.html"><button className="btn btn-primary">Add Movie</button></a>
          </div>
            <div className="col-sm">
              <button type="submit" className="btn btn-danger" >Fetch</button>
            </div>
            <div className="col-sm">
              year:
            <input id="year-input"
                onChange={(e: any) => this.props.updateYear(e.target.value)}
                value={this.props.year}
                type="number"
                placeholder="2018" />
            </div>
        </form>
        <div className="row">
          <div className="col">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Title</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody id="movie-table-body">
                {
                  this.props.movies.map(movie =>
                    <tr key={movie.title}>
                      <td>{movie.year}</td>
                      <td>{movie.title}</td>
                      <td>{movie.rating}</td>
                      <td>{movie.description}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}