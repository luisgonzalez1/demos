import * as React from 'react';


export class ClickerDisplayComponent extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  public render() {
    return (
      <div style={ {color: (this.props.clicks % 5 ? 'blue' : 'red') }}>
        {this.props.clicks}
      </div>
    );
  }
}