import React from 'react';
// import PropTypes from 'prop-types';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';

import Basket from '../components/Basket/Basket';
import Forest from '../components/Forest/Forest';
import mushroomShape from '../helpers/propz/mushroomShape';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
    mushroom: mushroomShape.mushroomShape,
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    console.error('mushrooms', mushrooms);
    const basket = mushroomData.getBasket();
    console.error('basket', basket);
    this.setState({ mushrooms, basket });
  }

  pickAMushroom = (mushroomId) => {
    mushroomData.pickAMushroom(mushroomId);
    const basket = mushroomData.getBasket();
    this.setState({ basket });
  }

  pickAMushroomEvent = (e) => {
    e.preventDefault();
    const pickAMushroom = this.pickAMushroom();
    const { mushroom } = this.state.mushroom;
    // pickAMushroom(mushroom.id); QUESTION: Do I not need this line?? How come it works without it???
  }

  render() {
    return (
      <div className="App">
        <h1 className="encounter-title p-3">Pick-Your-Own Mushroom Encounter</h1>
        <button className="btn btn-dark btn-lg m-3" onClick={this.pickAMushroomEvent}>Pick a Mushroom</button>
        <div className="row">
          <div className="container">
            <Forest mushrooms={this.state.mushrooms} />
          </div>
          <div className="container">
            <Basket basket={this.state.basket} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
