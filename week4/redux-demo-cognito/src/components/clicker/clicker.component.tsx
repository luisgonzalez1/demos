import * as React from 'react';
import { ClickerDisplayComponent } from './click-display.component';
import { ClickerButtonComponent } from './click-button.component';


export class ClickerComponent extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }


  public render() {
    return (
      <div>
        <ClickerDisplayComponent clicks={this.props.clicks} />
        <ClickerButtonComponent 
          clicks={this.props.clicks} 
          buyAuto={this.props.buyAuto} 
          increment={this.props.increment}
          buyNewJoke={this.props.buyNewJoke} />
      </div>
    );
  }
}