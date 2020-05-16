import React from 'react';
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
    fullBasket: false,
    lostAllMushrooms: false,
  }
  // Anca note: I will try and use a property of fullBasket to control whether the application has the fun animation or not.

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    const fullBasket = false;
    const lostAllMushrooms = false;
    this.setState({
      mushrooms,
      basket,
      fullBasket,
      lostAllMushrooms,
    });
  }

  pickAMushroom = (e) => {
    e.preventDefault();
    mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    const fullBasket = mushroomData.checkForFullBasket();
    console.log('fullbasket variable coming from data file', fullBasket);
    const lostAllMushrooms = mushroomData.lostEverythingEvent();
    console.log('lostEverything variable coming from data file', lostAllMushrooms);
    console.log('event in Appjs', e);
    this.setState({ basket, fullBasket, lostAllMushrooms });
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
        <div>
        {
          this.state.lostAllMushrooms ? (
            <button className="btn btn-danger skull skullAnimation"><i className="fas fa-skull-crossbones"></i></button>
          ) : (
            <h6 className="p-3">Could be fun, could be fatal...</h6>
          )
        }
        </div>
        <button className="btn btn-dark btn-lg m-5" onClick={this.pickAMushroom}>Pick a Mushroom</button>
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
