import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';

import Basket from '../components/Basket/Basket';
import Forest from '../components/Forest/Forest';
import Reward from '../components/Reward/Reward';
import mushroomShape from '../helpers/propz/mushroomShape';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
    mushroom: mushroomShape.mushroomShape,
    fullBasket: true,
  }
  // Anca note: Maybe try and use a property of fullBasket to control whether the application has the fun animation or not!!??

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    const fullBasket = false;
    this.setState({ mushrooms, basket, fullBasket });
  }

  pickAMushroom = (e) => {
    e.preventDefault();
    mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    const fullBasket = mushroomData.checkForFullBasket();
    console.log('fullbasket coming from data file', fullBasket);
    this.setState({ basket, fullBasket });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.fullBasket ? (
            <h1 className="encounter-title p-5 mt-5 funAnimation">CONGRATULATIONS!</h1>
          ) : (
            <h1 className="encounter-title p-3">Pick-Your-Own Mushroom Encounter</h1>
          )
        }
        {/* <h1 className="encounter-title p-3">Pick-Your-Own Mushroom Encounter</h1> */}
        {/* <Reward /> */}
        <button className="btn btn-dark btn-lg m-3" onClick={this.pickAMushroom}>Pick a Mushroom</button>
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
