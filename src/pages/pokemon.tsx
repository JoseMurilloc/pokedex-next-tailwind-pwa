import { Component } from 'react'

type HomeProps = {
  message: string;
};

type HomeState = {
  count: number; 
};


export default class Pokemon extends Component<HomeProps, HomeState> { 
  state: HomeState = {
    count: 0,
  };
  render () {
    return (
      <div className="container">
        <header>
          <h1>Pokemon</h1>
          <span>{this.state.count}</span>
        </header>
      </div>
    )
  }
}
