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
  // Anca note: I will use a property of fullBasket to control whether the home page has the fun animation or not.

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    const basket = mushroomData.getBasket();
    this.setState({
      mushrooms,
      basket,
    });
  }

  pickAMushroom = (e) => {
    e.preventDefault();
    const mushroomPicker = mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    this.setState({ basket, fullBasket: mushroomPicker.fullBasket, lostAllMushrooms: mushroomPicker.lostAllMushrooms });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.fullBasket ? (
            <h1 className="encounter-title p-5 mt-5 funAnimation">CONGRATULATIONS!<br />You have found all the available gourmet mushrooms!<br /><i className="fas fa-magic"></i> </h1>
          ) : (
            <h1 className="encounter-title p-3">'Fun-guy' Adventures</h1>
          )
        }
        <div>
        {
          this.state.lostAllMushrooms ? (
            <button className="btn btn-danger skull skullAnimation">Fatal mushroom!<br />Drop it, run!!<br /><small>Oh - And you just lost all your yummy mushrooms! </small><br /><i className="fas fa-skull-crossbones skullIcon"></i></button>
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
