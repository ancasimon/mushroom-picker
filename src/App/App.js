import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';

import Forest from '../components/Forest/Forest';

class App extends React.Component {
  state = {
    mushrooms: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    console.error('mushrooms', mushrooms);
    // const basket = mushroomData.getBasket();
    // console.error('basket', basket);
    this.setState({ mushrooms });
  }

  render() {
    return (
      <div className="App">
        <h1 className="encounter-title p-3">Pick-Your-Own Mushroom Encounter</h1>
        <button className="btn btn-dark btn-lg m-3">Pick a Mushroom</button>
        <Forest mushrooms={this.state.mushrooms} />
      </div>
    );
  }
}

export default App;
