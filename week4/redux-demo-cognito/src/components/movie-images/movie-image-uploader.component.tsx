import * as React from 'react';
import Dropzone from 'react-dropzone';
import { demoApiAxios } from '../../interceptors/demo-api-axios';
import { environment } from '../../environment';
import Axios from 'axios';

export class MovieImageUploaderComponent extends React.Component<any, any> {

  public constructor(props: any) {
    super(props);
    this.state = {
      url: ''
    }
  }

  public componentDidMount() {
    demoApiAxios.get(environment.context + 'files/infinity-war.jpg')
      .then(resp => {
        this.setState({
          url: resp.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  public onDrop = (files: any) => {
    const file = files[0];
    console.log(file);
    demoApiAxios.get(environment.context + 'movies/upload-file/' + file.name)
      .then(resp => {
        Axios.put(resp.data, file)
          .then(uploadResp => {
            alert(uploadResp.status);
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }

  public render() {
    return (
      <div className="centered-content">
        <Dropzone onDrop={this.onDrop}>
          <p>Drop your files here or click to select one.</p>
        </Dropzone>

        <img src={this.state.url} />
      </div>


    );
  }
}